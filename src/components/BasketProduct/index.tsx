import React, { useState, useEffect } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../models/basket';

import milk from '../../../assets/milk.png';
import CirclePlus from '../PlusButton/index';
import CircleMinus from '../MinusButton/index';
import PhotoWrap from '../PhotoCell/index';

export default function BasketProduct (props) {

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const addNewItem = (item, currentCount) => dispatch(addItem(item, currentCount));
  const deleteNewItem = (item, currentCount) => dispatch(deleteItem(item, currentCount));
  
  const [Quantity, setQuantity] = useState(props.itemStock);
 
  useEffect(() => {
    setQuantity(props.itemStock);
  });

  const [Price, setPrice] = useState(+((props.subPrice * Quantity).toFixed(2)));

  useEffect(() => {
    setPrice(+((props.subPrice * Quantity).toFixed(2)));
    //setTotal(current => current + props.subPrice);
  //}, [Quantity]);
  //console.log(Total)
})

  return (
    <View style={styles.contentContainer}>
    <View style={styles.innerWrapper}>
    <View style={styles.imageWrapper}>
    <View style={styles.cellContainer}>
    <PhotoWrap />
    </View>
    <Image source={props.productPicture} style={styles.productImage}/>
    </View>
    <View style={styles.textBlock}>
     <Text style={styles.smallText}>{props.productTitle}</Text>
     <View style={styles.quantSelector}>
     <TouchableOpacity onPress={() => {
       if (Quantity > 0) {
         deleteNewItem(props.itemId);
       }  else {null};
     }}>
     <CircleMinus />
     </TouchableOpacity>
     <Text style={styles.quantity}>{Quantity}</Text>
     <TouchableOpacity onPress={() => {
       addNewItem(props.itemId);
     }}>
     <CirclePlus />
     </TouchableOpacity>
     </View>
    </View>
    <View style={styles.priceBlock}>
     <Text style={styles.smallTitle}>{Price + 'Р'}</Text>
     <Text style={styles.subTitle}>{Quantity + 'x' + props.subPrice + ' P'}</Text>
    </View>
     </View>

    </View>
  );
};
      


const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    paddingHorizontal: 2,
    height: 80,
    flexDirection: 'column',
  },
  cellContainer: {
    position: 'absolute',

  },
  innerWrapper: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 3,
    flex: 1,

  },
  imageWrapper: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
   width: 81,
   height: 79,
   borderRadius: 20,
  },
  textBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  priceBlock: {
   alignItems: 'center',
   width: '20%',
  },
  quantity: {
    fontSize: 19,
  },
  smallTitle: {
    paddingVertical: 2,
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,

  },
  subTitle: {
    color: 'gray',
    fontSize: 11,
  },
  quantSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
    paddingTop: 10,
  }
})
