import React, { useState } from "react";
import { Image, Button, Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import milque from '../../../assets/milque.png';

export default function Card(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <>
    <TouchableOpacity style={styles.contentContainer}>
    <View style={styles.innerWrapper}>
     <Text style={styles.cardTitle}>{props.text}</Text>
      <FlatList
          data={[
            {key: 'Молочное'},
            {key: 'Сыр'},
            {key: 'Яйца'},
            {key: 'Йогурты'},
            {key: 'Творог'},
            {key: 'Сметана'},
            {key: 'Сырки'},
            {key: 'Пуддинги'},
            {key: 'Сливочное масло'},
            {key: 'Сгущенка'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        style={styles.cardTextContainer} />
        </View>
        <Image style={styles.imageContainer} source={milque}/>
    </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: '5.5%',
    backgroundColor: '#fff',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 26,
    elevation: 5,
    borderRadius: 26,

  },
  imageContainer: {
  },
  innerWrapper: {
    paddingVertical: 20, 
    paddingHorizontal: 24,
  },
  cardTextContainer: {
   paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    width: 224,
  },
  item: {
    fontSize: 16, 
    color: '#828282',
  },
})
