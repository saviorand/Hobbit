import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import logo from '../../../assets/Lenta_logo.png';

export default function ProductCard (props) {
  
  return (
    <View style={styles.contentContainer}>
     <View style={styles.imageContainer}>
      <Image source={props.productPicture} style={{ width: 300, height: 300 }}/>
     </View>
     <Text style={styles.smallTitle}>{props.productTitle}</Text>
     <View style={styles.textBlock}>
      <Text style={styles.weightText}>{props.productWeight}</Text>
      <Text style={styles.priceText}>{props.productPrice}</Text>
     </View>
    </View>
        );
};
      

const styles = StyleSheet.create({ 
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,

  },
  smallTitle: {
    fontSize: 20,
    paddingBottom: 25,
    alignSelf: 'flex-start',
  },
  weightText: {
    fontSize: 21,
    color: '#828282',
  },
  priceText: {
    fontSize: 24
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
})