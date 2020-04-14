import React, { useState } from "react";
import { Button, Text, FlatList, SectionList, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import ScreenTitle from '../../components/ScreenTitle/index';
import CardTitle from '../../components/CardTitle/index';
import Card from "../../components/Card/index.tsx";

import milque from '../../../assets/milque.png';

const GET_PREVIEWS = gql`
query($id: ID!) {
  shop(id: $id) {
    id
    shopName
    workingHours
    distanceTo
    categories {
      categoryName
      categoryContent {
        categoryPreviewName
      }
    }
  }
}
`


export default function Products({ route, navigation }) {

    const { shopId } = route.params;
    console.log(shopId)

    const { loading, error, data } = useQuery(GET_PREVIEWS, {
      variables: { "id": shopId }
    });

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const catArray = [];


  data.shop.categories.map(category => {
    const newItem = {};
    newItem.key = category.categoryName;

    const previewArray = [];
    category.categoryContent.map(preview => previewArray.push(preview.categoryPreviewName));
    
    newItem.data = previewArray;
    catArray.push(newItem);
  });

  console.log(catArray)

    
       
  const categories = (
    
    <FlatList
          data={catArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
          <TouchableOpacity style={styles.contentContainer}>
         <View style={styles.innerWrapper}>
          <CardTitle text={item.key} />
          <Card text={item.data} key={item.data} />
         </View>
        <Image style={styles.imageContainer} source={milque}/>
    </TouchableOpacity>
          )}
        />
        )


  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Что возьмём?'} />
       {categories}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: '5.5%',
    backgroundColor: '#fff',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 26,
    elevation: 5,
    borderRadius: 26,

  },
  imageContainer: {
  },
  innerWrapper: {
    paddingVertical: 20, 
    paddingHorizontal: 24,
  },
})