import React, { useState } from "react";
import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../../models/basket';

export default function NavButton (props) {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const clearUp = () => dispatch(clearBasket());

  const navigation = useNavigation();


  return (
     <TouchableWithoutFeedback onPress={() => {
       clearUp();
       navigation.navigate(props.whereTo)
     }}>
     <View style={styles.touchableButton}>
     <Text style={styles.navButtonText}>{props.buttonTitle}</Text>
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
    justifyContent: 'center',
    backgroundColor: '#FC8D24',
    minWidth: 300,

  },
  navButtonText: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
})
