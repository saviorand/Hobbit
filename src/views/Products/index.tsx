import React, { useState } from "react";
import { Button, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import CategoryPreview from '../../components/CategoryPreview/index';

const GET_PREVIEWS = gql`
  query($categoryIds: [ID]!) {
  categories(categoryIds: $categoryIds){
    id
    categoryName
    categoryContent
  }
}
`


export default function Products({ route, navigation }) {

    const { categoryIds } = route.params;

    const { loading, error, data } = useQuery(GET_PREVIEWS, {
      variables: { "categoryIds": categoryIds }
    });

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const catArray = [];

  data.categories.map(category => {
    
    const newItem = {};
    newItem.key = category.categoryName;

    const previewArray = [];
    category.categoryContent.map(preview => previewArray.push(preview));
    
    newItem.data = previewArray;
    catArray.push(newItem);

  });

  return (
    <SafeAreaView style={styles.container}>
  	<View>
      <CategoryPreview catArray={catArray} />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})