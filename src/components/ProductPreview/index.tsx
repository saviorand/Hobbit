import React, { useState } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import AddToBasket from '../AddToBasketPlus/index';
import logo from '../../../assets/Lenta_logo.png';

export default function ProductPreview (props) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={1} style={styles.contentContainer} 
    onPress={() => navigation.navigate('ProductProfile', {
      productId: props.productId
    })
  }>
  <View style={styles.outerWrapper}>
    <View style={styles.imageContainer}>
     <Image source={logo} style={{ width: 120, height: 110 }}/>
    </View>
    <View style={styles.innerWrapper}>
    <View style={styles.textBlock}>
     <Text style={styles.smallTitle}>{props.productPrice}</Text>
     <Text style={styles.smallText}>{props.productName}</Text>
     <Text style={styles.smallSub}>{props.productWeight}</Text>
     </View>
     <View style={styles.addTo} onPress={() => {
     }}>
      <AddToBasket />
      </View>
     </View>
     </View>
    </TouchableOpacity>
  );
};
      

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    flexDirection: 'column',
    width: 140,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 2,
    borderRadius: 29,
    marginHorizontal: 15,

  },
  outerWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 3, 
  },
  innerWrapper: {
    padding: 5,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    backgroundColor: '#fff',
    width: 130,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textBlock: {
    flex: 1,
    borderBottomLeftRadius: 29,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  smallTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallText: {
    fontSize: 13,
  },
  smallSub: {
    color: 'gray',
  },
  addTo: {
     justifyContent: 'flex-end',
     padding: 10,
     alignSelf: 'flex-end',
     flex: 0.1,
  }
})
