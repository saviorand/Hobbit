import React, { useState } from "react";
import { ScrollView, Button, Text, View, StyleSheet } from "react-native";
import Card from "../Card/index.tsx";

export default function HomeScreen({ navigation }) {

  return (
     <ScrollView style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.boxLarge}>
          <Card text="Munkustrap" />
          </View>
          <View style={styles.boxLarge} />
        </ScrollView>
         <View style={styles.boxSmall}>
          <Card text="Spot" />
         </View>        
         <View style={styles.boxSmall} />
    <View>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
      <Button
        title="Specify my address"
        onPress={() => navigation.navigate('AddressSelection')}
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
