import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ConversationsContext } from '../context';
import { colors } from '../styles/colors';
import Conversations from './Conversations';
import Messages from './Messages';

const Stack = createStackNavigator();

const ConversationsNavigation = () => {
    const [conversationId, setConversationId] = useState(null);

  return (
    <ConversationsContext.Provider value={{
        conversationId,
        setConversationId,
    }}>
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: colors.black,
                headerTransparent: true,
                headerTitleAlign: "left",
                headerStyle: {
                    height: 160,
                },
                headerTitleStyle: {
                    textAlign: "left",
                    fontWeight: "bold",
                    fontFamily: "Poppins_700Bold",
                    fontSize: 24,
                },
            }}
        >
            <Stack.Screen 
                name='Conversations'
                component={Conversations}
            />
            <Stack.Screen 
                name='Messages'
                component={Messages}
                options={({ route })=>({
                    title: route.params.name,
                    headerTitleStyle: {
                        textAlign: "center",
                        fontFamily: "Poppins_400Regular",
                        fontSize: 20,
                        position: "absolute",
                        top: 100,
                        left: 120,
                    }
                })}
            />
        </Stack.Navigator>
    </ConversationsContext.Provider>
  )
}

export default ConversationsNavigation