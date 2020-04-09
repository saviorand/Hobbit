import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ScreenTitle (props) {

  return (
    <View style={styles.titleContainer}>
     <Text style={styles.titleText}>{props.screenTitle}</Text>
    </View>
  );
};
      

const styles = StyleSheet.create({
  titleContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 21,
    textAlign: 'center',
    //fontFamily: 'Montserrat',
    color: '#FB742D',
    lineHeight: 20,
    width: 295,
    fontWeight: '700',
    fontStyle: 'normal',
  },
})
