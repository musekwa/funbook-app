import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../Layout'
import ListOfAvatars from '../components/ListOfAvatars'
import ListOfCards from '../components/ListOfCards'

const Feed = () => {

  return (
    <Layout>
      <View style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        // height: 200,
        width: "100%",
        zIndex: 100,
      }}>
        <ListOfAvatars />
        <ListOfCards />
      </View>
    </Layout>
  )
}

export default Feed