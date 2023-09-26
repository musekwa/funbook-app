import {  View, } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Feed from './Feed';
import AddPost from './AddPost';
import Favorites from './Favorites';
import Profile from './Profile';
import { colors } from '../styles/colors';


const Tab = createBottomTabNavigator();

const ConversationsBase = ()=><View style={{ flex: 1}} />

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route })=>({
        tabBarIcon: ({ focused, color, size })=>{
          let iconName;
          if(route.name === "Feed") {
            iconName = focused ? "md-home" : "md-home-outline";
          }
          else if (route.name === "Conversations") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          }
          else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          }
          else if (route.name === "Profile"){
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.accentStroke,
        tabBarInactiveTintColor: colors.black,
        tabBarShowLabel: false,
        headerTransparent: false,
        headerTitleAlign: "left",
        headerStyle: {
            height: 100,
        },
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
        }
      })}
    >
      <Tab.Screen 
        name="Feed" 
        component={Feed}
        // options={{
        //   headerShown: true,
        //   headerTitleStyle: {
        //     paddingBottom: 40
        //   }
        // }} 
      />
      <Tab.Screen 
        name="ConversationsMain" 
        component={ConversationsBase} 
        options={{
            tabBarIcon: ({ size })=>(
                <Ionicons name='chatbox-outline' color={colors.black} size={size} />
            )
        }}
        listeners={({ navigation })=>({
            tabPress: (e)=>{
                e.preventDefault();
                navigation.navigate("ConversationsNav");
            }
        })}
    />
      <Tab.Screen 
        name="AddPost" 
        component={AddPost} 
        options={{
            tabBarIcon: ({ size })=>(
              <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
              >
                  <View
                      style={{
                          position: "absolute",
                          backgroundColor: colors.black,
                          padding: 14,
                          top: -15,
                          // left: -13,
                          borderRadius: 50,
                          transform: [{ rotate: "-45deg" }],
                          shadowColor: colors.black,
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.2,
                          shadowRadius: 20,
                      }}
                  >
                      <Ionicons name='add-circle-outline' color='#ffffff' size={26} />
                  </View>

              </View>
            )
        }}
    />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            headerShown: false
        }}
    />
    </Tab.Navigator>
  )
}