import React from "react";
import { Image, Button, Text, View, StyleSheet } from "react-native";
//import milque from '../../../assets/milque.png';

export default function ErrorMessage(props) {

  return (
    <>      
     <View style={styles.sorryContainer}>
        <Text style={styles.sorryText}>{props.errorText}</Text>
     </View>
    </>
  );
}




const styles = StyleSheet.create({
  sorryContainer: {
    height: 300,
    justifyContent: 'center',
  },
  sorryText: {
   color: 'gray',
   fontSize: 24,
   textAlign: 'center',
  },
})
