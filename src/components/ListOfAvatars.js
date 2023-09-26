
import { View, Text , FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import ListHeaderComponent from './ListHeaderComponent'
import { UserListContext } from '../context'


const ListOfAvatars = () => {
    const renderItem = ({ item }) =>{
        return (
        <Pressable 
          style={{
            // paddingBottom: 100,
          }}
          onPress={()=>console.log("hello avatar")}>
            <Image 
              style={{
                height: 56, 
                width: 56,
                borderRadius: 28,
                marginRight: 30,
              }}
              source={{
                uri: item.url,
              }}
            />
          </Pressable>)
    }
  return (
    <UserListContext.Consumer>
      {
        ({ userList })=>(
          <View
            style={{
              zIndex: 100,
              paddingBottom: 30,
              paddingLeft: 20,
              // backgroundColor: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <FlatList 
              data={userList}
              renderItem={renderItem}
              keyExtractor={(item, index)=>{
                return index.toString()
              }}
              horizontal
              ListHeaderComponent={<ListHeaderComponent />}
              showsHorizontalScrollIndicator={false}
              snapToInterval={86}
              decelerationRate='fast'
            
            />
          </View>
        )
      }
    </UserListContext.Consumer>
  )
}

export default ListOfAvatars