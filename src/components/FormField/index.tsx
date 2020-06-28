import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default function FormField (props) {

  const [textColor, onChangeColor] = React.useState('#545454');
  
  return (
     <>
     <Text>{props.formTitle}</Text>
     <TextInput
      style={{...styles.textInput, color: textColor, padding: 5}}
      {...props}
      onFocus={() => {onChangeColor('#000'); props.onChangeText('')}}
      editable
    />
    </>
     
     );
};
      

const styles = StyleSheet.create({
  textInput: {
    minWidth: 300,
    borderBottomColor: 'rgba(227, 82, 5, 0.6)',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f7f7f7'
  },
  
})