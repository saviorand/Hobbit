import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function NavButton (props) {

  const navigation = useNavigation();

  return (
    <View style={styles.contentContainer}>
     <Button
        title={props.buttonTitle}
        onPress={() => navigation.navigate(props.whereTo)}
      />
    </View>
  );
};
      

const styles = StyleSheet.create({
  contentContainer: {
    height: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
})
