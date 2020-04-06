import React, { useState } from "react";
import { ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../../components/Card/index.tsx";

export default function Home({ navigation }) {
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
    </View>
     </ScrollView>
  );
}

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
