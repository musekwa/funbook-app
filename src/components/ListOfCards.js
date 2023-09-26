import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestBase } from '../utils/constants';
import Card from './Card';


const ListOfCards = () => {
  const [cardList, setCardList] = useState(null);

  const fetchCardData = async ()=>{
    try {
      const response = await fetch(requestBase + "/home.json");
      setCardList(await response.json());
    } catch (error) {
      throw new Error("Could not fetch Card list data ", { cause: error });
    }
  }

  useEffect(()=>{
    fetchCardData();
  }, []);

  if (!cardList){
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) =>{
      return <Card item={item} />
  }

  return (
    <View style={{
        marginTop: -200,
        paddingHorizontal: 20,
        marginBottom: 220,
    }}>
      <FlatList 
        data={cardList.reverse()}
        renderItem={renderItem}
        keyExtractor={(item, index)=>{
          return index.toString();
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{ height: 200}} />}
        snapToInterval={312}
        decelerationRate='fast'
      />
    </View>
  )
}

export default ListOfCards