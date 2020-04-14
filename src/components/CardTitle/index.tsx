import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CardTitle(props) {

  return (
    <>
    <Text style={styles.cardTitle}>{props.text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    width: 224,
  },
})

