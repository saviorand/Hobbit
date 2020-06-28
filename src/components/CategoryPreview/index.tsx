import React, { useState } from "react";
import { FlatList, Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import CardTitle from '../../components/CardTitle/index';
import Card from "../../components/Card/index";

import milque from '../../../assets/milque.png';

const GET_PREVIEW_TEXT = gql`
  query($categoryPreviewIds: [ID]!) {
  categoryPreviews(categoryPreviewIds: $categoryPreviewIds){
    id
    categoryPreviewName
    categoryPreviewContent
  }
}
`

export default function CategoryPreview (props) {

  const navigation = useNavigation();

  const previewIds = [];
  props.catArray.map(item => previewIds.push(item.data))
  
  const previewContents = previewIds.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  });
   const { loading, error, data } = useQuery(GET_PREVIEW_TEXT, {
      variables: { "categoryPreviewIds": previewContents }
    });


  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  let previewsWithTitles = [...props.catArray];

  previewsWithTitles.map(item => {
    for (let i = 0; i < item.data.length; i++){
      (previewContents.includes(item.data[i])) 
      ? (item.data[i] = data.categoryPreviews.find(content => (content.id === item.data[i])))
      : null
    }
  })


  return (
    <FlatList
          data={previewsWithTitles}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
          <TouchableOpacity style={styles.contentContainer} 
          onPress={() => navigation.navigate('Home', {
            screen: 'product-selection', 
            params: {
            productItems: item.data.map(preview => preview.categoryPreviewContent),
            productSections: item.data.map(preview => preview.categoryPreviewName),
            productSectionIds: item.data.map(preview => preview.id),
            currentBigCategory: item.key,
          }})}>
         <View style={styles.innerWrapper}>
          <CardTitle text={item.key} />
          <Card text={item.data.map(preview => preview.categoryPreviewName )} 
          key={item.data.map(preview => preview.id )} />
         </View>
        <Image style={styles.imageContainer} source={milque}/>
    </TouchableOpacity>
          )}
        />
    
   
  );
};
      

const styles = StyleSheet.create({
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


/*<FlatList
          data={props.catArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
          <TouchableOpacity style={styles.contentContainer} 
          onPress={() => navigation.navigate('ProductSelection', {
            contentId: item.id,
          })}>
         <View style={styles.innerWrapper}>
          <CardTitle text={item.key} />
          <Card text={item.data} key={item.id} />
         </View>
        <Image style={styles.imageContainer} source={milque}/>
    </TouchableOpacity>
          )}
        />*/