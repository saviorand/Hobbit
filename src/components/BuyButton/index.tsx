import React, { useState } from "react";
import { Button, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../models/basket';


export default function BuyButton (props) {
  
  const [textColor, setTextColor] = useState('#fff');
  const [bgColor, setBgColor] = useState('#FC8D24');
  const navigation = useNavigation();

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const addNewItem = (item, currentCount) => dispatch(addItem(item, currentCount));


  return (
      <TouchableWithoutFeedback onPress={() => {
       addNewItem(props.productToBuy, 1);
       alert('Мы добавили этот продукт в вашу корзину');
      }} 
      >
      <View style={styles.buttonWrapper} >
       <View 
       style={[styles.touchableButton, {
        backgroundColor: bgColor,
      }]}>
      <View style={styles.borderView}>
       <Text style={[styles.deliveryTime, {
         color: textColor,
         }]}>{props.deliveryTime}</Text>
       </View>
       <View style={styles.centerView}>
         <Text style={[styles.catButtonText, {
         color: textColor,
         }]}>{props.buttonText}</Text>
        </View>
       <View style={styles.borderView}>
         <Text style={[styles.orderTotal, {
         color: textColor,
         }]}>{props.orderTotal}</Text>
         </View>
         </View>
       </View>
      </TouchableWithoutFeedback>
     );
};
      

const styles = StyleSheet.create({
  
  touchableButton: {
    borderRadius: 29,
    paddingVertical: 2,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  catButtonText: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: '500',
  }, 
  orderTotal: {
    fontSize: 16,
    fontWeight: '700',
  },
  borderView: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})