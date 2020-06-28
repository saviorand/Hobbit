import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, Image, TouchableWithoutFeedback, TextInput, ScrollView, Switch } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from "expo";
import FormField from '../../components/FormField/index';
import FormSwitch from '../../components/FormSwitch/index';
import NavButton from '../../components/NavButton/index';

import { useSelector, useDispatch } from 'react-redux';
import { saveUser, getUser } from '../../models/userdetails';

import ScreenTitle from '../../components/ScreenTitle/index';

export default function ClarifyDetails({ route, navigation }) {

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const saveNewUser = user => dispatch(saveUser(user));

  const [street, onChangeStreet] = React.useState('Кораблестроителей 32');
  const [flat, onChangeFlat] = React.useState('169');
  const [floor, onChangeFloor] = React.useState('7');
  const [entrance, onChangeEntrance] = React.useState('2');
  const [ring, onChangeRing] = React.useState('169');
  const [entry, onChangeEntry] = React.useState(false);
  const toggleEntry = () => onChangeEntry(previousState => !previousState);
  const [elevator, onChangeElevator] = React.useState(false);
  const toggleElevator = () => onChangeElevator(previousState => !previousState);

  const [name, onChangeName] = React.useState('Семён Семёнович');
  const [phone, onChangePhone] = React.useState('+79117751234');

  const [time, onChangeTime] = React.useState('19 мая 20:00');
  const [earlier, onChangeEarlier] = React.useState(true);
  const toggleEarlier = () => onChangeEarlier(previousState => !previousState);

  const [comment, onChangeComment] = React.useState('Берите свеженькое!');
  const [anotherPhone, onChangeAnotherPhone] = React.useState('+79117751337');

  const [paymentMethod, onChangePaymentMethod] = React.useState(false);
  const togglePaymentMethod = () => onChangePaymentMethod(previousState => !previousState);

  

  return (
  	<ScrollView contentContainerStyle={styles.container}>
     <View style={styles.formContainer}>

     <ScreenTitle screenTitle={'Куда привезти?'} />
     <View style={styles.sectionContainer}>
     <FormField 
      formTitle={'Улица, дом'}
      onChangeText={text => onChangeStreet(text)}
      value={street}
      />
      <FormField 
      formTitle={'Квартира'}
      onChangeText={text => onChangeFlat(text)}
      value={flat}
      />
      <FormField 
      formTitle={'Этаж'}
      onChangeText={text => onChangeFloor(text)}
      value={floor}
      />
      <FormField 
      formTitle={'Парадная'}
      onChangeText={text => onChangeEntrance(text)}
      value={entrance}
      />
      <FormField 
      formTitle={'Домофон'}
      onChangeText={text => onChangeRing(text)}
      value={ring}
      />
      <FormSwitch switchText={'Вход со двора?'} onSwitchChange={toggleEntry} switchValue={entry} />
      <FormSwitch switchText={'Нет лифта?'} onSwitchChange={toggleElevator} switchValue={elevator} />
    </View>

    <ScreenTitle screenTitle={'Как вас зовут?'} />
    <View style={styles.sectionContainer}>
    <FormField 
      formTitle={'Имя, Фамилия'}
      onChangeText={text => onChangeName(text)}
      value={name}
      />
    <FormField 
      formTitle={'Телефон'}
      onChangeText={text => onChangePhone(text)}
      value={phone}
      />
    </View>

    <ScreenTitle screenTitle={'Когда привезти?'} />
    <View style={styles.sectionContainer}>
    <FormField 
      formTitle={'Дата, время'}
      onChangeText={text => onChangeTime(text)}
      value={time}
      />
     <FormSwitch switchText={'Можем привезти раньше времени?'} onSwitchChange={toggleElevator} switchValue={elevator} />
     
     <FormField 
      formTitle={'Комментарий'}
      onChangeText={text => onChangeComment(text)}
      value={comment}
      />
     <FormField 
      formTitle={'Телефон получателя (если получаете не вы)'}
      onChangeText={text => onChangeAnotherPhone(text)}
      value={anotherPhone}
      />
      </View>
    <View style={{...styles.sectionContainer, backgroundColor: '#f2f2f2', paddingHorizontal: 10,
     borderRadius: 15, marginVertical: 40, justifyContent: 'center'}}>
    <FormSwitch switchText={'Платите наличными?'} onSwitchChange={togglePaymentMethod} switchValue={paymentMethod} />
    </View>
    <View style={styles.buttonContainer}>
    <TouchableWithoutFeedback onPress={() => {
      if (paymentMethod === false){
        navigation.navigate('Оплата заказа', {
          orderSum: route.params.orderSum,
          orderContent: route.params.orderContent,
        });
      } else {
        //Linking.openURL(Linking.makeUrl('/home/thankyou/123'));
        const userProfile = {
          StreetAddress: street,
          FlatNumber: flat,
          FloorNumber: floor,
          EntranceDetails: entrance,
          RingNumber: ring,
          EntryFromCourt: entry,
          NoElevator: elevator,
          UserName: name,
          UserPhone: phone,
          DeliveryTime: time,
          DeliverEarlier: earlier,
          OrderComment: comment,
          AnotherNumber: anotherPhone,
          OrderPaymentCash: paymentMethod
        }
        //saveNewUser(userProfile);
        console.log(userProfile);
        Linking.openURL(Linking.makeUrl('/home/thankyou/123'));
      }
      }} 
      >
      <View style={styles.touchableButton}>
     <Text style={styles.navButtonText}>Заказать</Text>
     </View>
      </TouchableWithoutFeedback>
    </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: -15,
  },
  sectionContainer: {
    marginTop: 20
  },
  buttonContainer: {
    marginBottom: 40,
  },
  touchableButton: { 
    borderRadius: 29,
    paddingVertical: 2,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FC8D24',
    minWidth: 300,

  },
  navButtonText: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
})
