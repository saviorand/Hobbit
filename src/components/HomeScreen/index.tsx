import React, { useState } from "react";
import { ScrollView, Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../Card/index.tsx";

export default function HomeScreen({ navigation }) {

  return (
     <ScrollView style={styles.container}>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.boxLarge} onPress={() => navigation.navigate('Products')}>
          </TouchableOpacity>
          <View style={styles.boxLarge} />
        </ScrollView>
         <View style={styles.boxSmall}>
         </View>        
         <View style={styles.boxSmall} />
    <View>
      <Button
        title="Go to Products"
        
      />

    </View>
     </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  boxSmall: {
    width: 400,
    height: 100,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  contentElement: {
    marginRight: 30,
    backgroundColor: 'steelblue',

  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})

