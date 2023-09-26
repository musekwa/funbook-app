import 'react-native-gesture-handler';
import { View,  ActivityIndicator, } from 'react-native';
import React, {  useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { UserListContext } from './src/context';

import Login from './src/surfaces/Login';
import Home from './src/surfaces/Home';
import CustomActivityIndicator from './src/components/CustomActivityIndicator';
import { requestBase } from './src/utils/constants';
import ConversationsNavigation from './src/surfaces/ConversationsNavigation';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(2555, 255, 255)",
  },
};

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });


  const fetchUserData = async ()=>{
    try {
      const response = await fetch(requestBase + "/users.json");
      setUserList(await response.json());
    } catch (error) {
      throw new Error("Could not fetch user list data ", { cause: error });
    }
  }

  useEffect(()=>{
    fetchUserData();
  }, []);

  if(!(userList && fontsLoaded)){
    return <CustomActivityIndicator />;
  }



  return (
    <SafeAreaProvider>
      <UserListContext.Provider
        value={{ userList }}
      >
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            {
              !userLoggedIn ? (
                <Stack.Screen 
                  name="Login" 
                  component={Login}  
                />
              )
              :
              (
                <>
                <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='ConversationsNav'
                  component={ConversationsNavigation}
                  options={{ headerShown: false }}
                />
                </>
              )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
    </SafeAreaProvider>
  );
}

