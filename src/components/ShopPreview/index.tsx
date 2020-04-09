import React, { useState } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/Lenta_logo.png';

export default function ShopPreview (props) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate('Home')}>
    <View style={styles.imageContainer}>
     <Image source={logo} style={{ width: 120, height: 35 }}/>
    </View>
    <View style={styles.textBlock}>
     <Text style={styles.smallTitle}>{props.shopTitle}</Text>
     <Text style={styles.smallText}>Расстояние до магазина: {props.distanceTo}</Text>
     <Text style={styles.smallText}>Время работы: {props.workingHours}</Text>
     </View>
    </TouchableOpacity>
  );
};
      

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    height: 100,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#EFEFEF',
    width: 130,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textBlock: {
    justifyContent: 'center',
    width: 200,
  },
  smallTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallText: {
    fontSize: 13,
  }
})
