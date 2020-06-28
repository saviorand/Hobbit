import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

export default function PreferencesButton(props) {
  
  return (

      <TouchableWithoutFeedback onPress={() => {
        props.onPress()
      }}
      >
      <View style={styles.settingsButton}>
      <Text style={styles.settingsButtonText}>{props.buttonText}</Text>
      </View>
      </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  settingsButton:  {
    height: 75,
    borderTopColor: 'rgba(227, 82, 5, 0.6)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(227, 82, 5, 0.6)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsButtonText: {
    fontWeight: '600',
    fontSize: 20,
  },
  settingsContainer: {
    width: '100%',
  }
})
