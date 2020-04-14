import React, { useState } from "react";
import { Button, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function BuyButton (props) {
  
  const [textColor, setTextColor] = useState('#fff');
  const [bgColor, setBgColor] = useState('#FC8D24');
  const navigation = useNavigation();

  return (
      <TouchableWithoutFeedback onPress={() => {
        alert('Какая встреча!')
      }} 
      >
      <View style={styles.buttonWrapper} >
       <View 
       style={[styles.touchableButton, {
        backgroundColor: bgColor,
      }]}>
       <Text style={[styles.catButtonText, {
         color: textColor,
         }]}>{props.buttonText}</Text></View>
       </View>
      </TouchableWithoutFeedback>
     );
};
      

const styles = StyleSheet.create({
  
  touchableButton: {
    borderRadius: 29,
    paddingVertical: 2,
    paddingHorizontal: 40,
    marginHorizontal: 8,
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
  }
})