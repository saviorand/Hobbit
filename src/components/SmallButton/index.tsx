import React, { useState } from "react";
import { Button, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SmallButton (props) {
  
  const [textColor, setTextColor] = useState('black');
  const [bgColor, setBgColor] = useState('#fff');
  const navigation = useNavigation();

  return (
      <TouchableWithoutFeedback onPress={() => {
        setTextColor('white'); 
        setBgColor('#fc955f');
        alert('Какая встреча!')
      }} 
      >
      <View 
      style={[styles.touchableButton, {
        backgroundColor: bgColor,
      }]}><Text style={[styles.catButtonText, {
        color: textColor,
      }]}>{props.category}</Text></View>
      </TouchableWithoutFeedback>
        );
};
      

const styles = StyleSheet.create({
  
  touchableButton: {
    borderRadius: 29,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  catButtonText: {
    padding: 8,
  }
})
