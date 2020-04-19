import React, { useState } from "react";
import { Button, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SmallButton (props) {
  
  const [subSection, setSubSection] = props.onSubSectionSelect;

  const navigation = useNavigation();

  return (
      <TouchableWithoutFeedback onPress={() => {
        setSubSection(props.section)
      }} 
      >
      <View 
      style={[styles.touchableButton, {
        backgroundColor: subSection === props.section ? '#fc955f' : 'white',
      }]}><Text style={[styles.catButtonText, {
        color: subSection === props.section ? 'white' : 'black',
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
