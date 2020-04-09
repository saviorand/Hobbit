import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../../components/Card/index.tsx";
import AddressSearch from '../../components/AddressSearch';


export default function AddressSelectionScreen() {
  return (
    <View style={styles.container}>
        <AddressSearch />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  }},
  )
