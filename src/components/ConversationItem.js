import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import { UserListContext, ConversationsContext } from "../context";

const ConversationItem = ({ navigation, item }) => {

  const onPressItem = (setConversationId, currentUser) => {
    setConversationId(item.id);

    navigation.navigate("Messages", {
      name: currentUser[0].name,
      avatar: currentUser[0].url,
      conversationId: item.id,
    });
  };
  return (
    <ConversationsContext.Consumer>
      {({ setConversationId }) => (
        <UserListContext.Consumer>
          {({ userList }) => {
            
            const currentUser = userList.filter(
              (user) => user.id === item.userId
            );
            return (
              <Pressable
                onPress={() => onPressItem(setConversationId, currentUser)}
                style={{
                  height: 103,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  borderRadius: 33,
                  marginBottom: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View>
                  <View
                    style={{
                      width: 67,
                      height: 67,
                      borderRadius: 35,
                      borderColor: "#000000",
                      borderWidth: 1,
                      marginHorizontal: 17,
                    }}
                  >
                    <Image
                      style={{
                        width: 61,
                        height: 61,
                        borderRadius: 35,
                        marginTop: 2,
                        marginLeft: 2,
                      }}
                      source={{
                        uri: currentUser[0].url,
                        // uri: "https://images.unsplash.com/photo-1654512799227-94e56fbed599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 14, paddingBottom: 9 }}>
                    {currentUser[0].name}
                  </Text>
                  <Text style={{ color: "#656565", width: "65%" }}>
                    {item.text}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        </UserListContext.Consumer>
      )}
    </ConversationsContext.Consumer>
  );
};

export default ConversationItem;