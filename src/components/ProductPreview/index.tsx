import React, { useState } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/Lenta_logo.png';

export default function ProductPreview (props) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={1} style={styles.contentContainer} onPress={() => navigation.navigate('Products', {
      
    })
  }>
  <View style={styles.innerWrapper}>
    <View style={styles.imageContainer}>
     <Image source={logo} style={{ width: 120, height: 110 }}/>
    </View>
    <View style={styles.textBlock}>
     <Text style={styles.smallTitle}>{props.productPrice}</Text>
     <Text style={styles.smallText}>{props.productName}</Text>
     <Text style={styles.smallSub}>{props.productWeight}</Text>
     </View>
     </View>
    </TouchableOpacity>
  );
};
      

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    flexDirection: 'column',
    width: 140,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 2,
    borderRadius: 29,
    marginHorizontal: 15,

  },
  innerWrapper: {
    padding: 15,
    justifyContent: "center",
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff',
    width: 130,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textBlock: {
    flex: 1,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 29,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  smallTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallText: {
    fontSize: 13,
  },
  smallSub: {

  },
})
