import React from "react";
import { View, Text, Image } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import  ListOfMessages  from "../components/ListOfMessages";
import { ConversationsContext } from "../context";
import Layout from "../../Layout";

const Messages = ({ route }) => {
  const headerHeight = useHeaderHeight();

  const { name, avatar, conversationId } = route.params;

  return (
    <Layout>
      {/* <ConversationsContext.Consumer>
        {({ conversationId }) => (
          <> */}
            <View
              style={{
                position: "absolute",
                top: 40,
                left: "2%",
                backgroundColor: "#E1F6F4",
                width: "96%",
                height: 255,
                borderRadius: 34,
              }}
            />
            <View
              style={{
                width: 650,
                height: 570,
                borderRadius: 155,
                borderWidth: 1,
                borderColor: "#ffffff",
                position: "absolute",
                top: 250,
                left: -300,
                transform: [{ rotate: "-45deg" }],
              }}
            />
            <View
              style={{
                width: 650,
                height: 570,
                borderRadius: 155,
                borderWidth: 1,
                borderColor: "#ffffff",
                position: "absolute",
                top: 190,
                left: -290,
                transform: [{ rotate: "-45deg" }],
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 125,
                left: 70,
              }}
            >
              <View
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: 35,
                  borderColor: "#000000",
                  borderWidth: 1,
                  transform: [{ rotate: "-45deg" }],
                  position: "absolute",
                  top: -3,
                  left: -3,
                }}
              />
              <Image
                style={{ height: 78, width: 78, borderRadius: 40 }}
                source={{
                  uri: route.params.avatar,
                }}
              />
            </View>
            <ListOfMessages conversationId={conversationId} />
          {/* </>
        )}
      </ConversationsContext.Consumer> */}
    </Layout>
  );
};

export default Messages;