import React, { useState } from "react";
import { Image, Button, Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import CardTitle from "../CardTitle/index";
import milque from '../../../assets/milque.png';

export default function Card(props) {

  return (
    <>    
    <View style={styles.cardTextContainer}>
       {props.text.map(item => {
         return (
           <Text key={item} style={styles.item}>{item}</Text>
           )
       })}
    </View>
    </>
  );
}




const styles = StyleSheet.create({

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
