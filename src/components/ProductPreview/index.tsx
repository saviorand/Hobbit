import React, { useState } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../models/basket';

import AddToBasket from '../AddToBasketPlus/index';
import logo from '../../../assets/Lenta_logo.png';

export default function ProductPreview (props) {

  const navigation = useNavigation();

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const addNewItem = (item, currentCount) => dispatch(addItem(item, currentCount));


  return (
    <View style={styles.outerContainer}>
    <TouchableOpacity activeOpacity={1} style={styles.contentContainer} 
    onPress={() => navigation.navigate('Home', {
      screen: 'product-profile',
      params: { productId: props.productId },
    })
  }>
  <View style={styles.outerWrapper}>
    <View style={styles.imageContainer}>
     <Image source={props.productPicture} style={{ width: 120, height: 110, borderRadius: 20 }}/>
    </View>
    <View style={styles.innerWrapper}>
    <View style={styles.textBlock}>
     <Text style={styles.smallTitle}>{props.productPrice}</Text>
     <Text style={styles.smallText}>{props.productName}</Text>
     <Text style={styles.smallSub}>{props.productWeight}</Text>
     </View>
     </View>
     </View>
    </TouchableOpacity>
     <TouchableOpacity style={styles.addTo} onPress={() => {
       addNewItem(props.productId, 1);
       alert('Мы добавили этот продукт в вашу корзину');
     }}>
      <AddToBasket />
      </TouchableOpacity>
    </View>
  );
};
      

const styles = StyleSheet.create({
  outerContainer: {
    width: 140,
  },
  contentContainer: {
    marginVertical: 10,
    flexDirection: 'column',
    width: 140,
    height: '80%',
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
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
     height: '20%',
     justifyContent: 'flex-end',
     padding: 10,
     alignSelf: 'flex-end',
     position: 'absolute',
     right: 0,
     bottom: 0,
     flex: 0.1,
  }
})
