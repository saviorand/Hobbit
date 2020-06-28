import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

export default function FormSwitch (props) {
  
  return (
     <View style={styles.switchContainer}>
      <Text>{props.switchText}</Text>
      <Switch onValueChange={props.onSwitchChange} value={props.switchValue} />
     </View>
     
     );
};
      

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  
})