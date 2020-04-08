import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import MapView, { MAP_TYPES, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import NavButton from '../../components/NavButton/'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 59.929938;
const LONGITUDE = 30.324597;
const LATITUDE_DELTA = 0.0222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Map extends Component {

  state = {
    location: null,
    errorMessage: null,
    region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
  };

  constructor(props) {
    super(props);
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }}


   onRegionChange(region) {
    this.setState({ region });
  }

   centerOnLocation(){
     const region = this.state.region;
     return {
      latitude: region.latitude,
      longitude: region.longitude,
    };
  };

   animateToCenter(){
     this.map.animateCamera({ center: this.centerOnLocation() })
   }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ region: {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,     
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA, 
    }
    });
    this.animateToCenter()
  }


render() {

    return (
      <View style={styles.container}>
        <MapView
        ref={ref => {
            this.map = ref;
          }}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}>
          <Marker coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }} />
          </MapView>
        <View style={styles.topTitle}><Text>Куда вам доставить?</Text></View>
        <View style={[styles.bubble, styles.latlng]}>
          <Text style={styles.centeredText}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)},
          </Text>
          {/*<TouchableOpacity onPress={() => this.animateToCenter()}>
          <Text>Jump to my location</Text>
          </TouchableOpacity>*/}
        </View>
        <NavButton buttonTitle={'Доставьте сюда'} whereTo={'Home'}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 200, 
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  topTitle: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 200,
    fontSize: 24,
  },
  centeredText: { textAlign: 'center' },
});

