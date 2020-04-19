import React, { useState } from "react";
import { Image, Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import milk from '../../../assets/milk.png';
import CirclePlus from '../PlusButton/index';
import CircleMinus from '../MinusButton/index';
import PhotoWrap from '../PhotoCell/index';

export default function BasketProduct (props) {
  
  const [Quantity, setQuantity] = useState(1);
  const [Price, setPrice] = useState(264.60);
 
  return (
    <View style={styles.contentContainer} /*onPress={() => navigation.navigate('Products', {
      shopId: props.shopid
    })
  }*/>
    <View style={styles.innerWrapper}>
    <View style={styles.imageWrapper}>
    <View style={styles.cellContainer}>
    <PhotoWrap />
    </View>
    <Image source={milk} style={{ width: 25, height: 65, }}/>
    </View>
    <View style={styles.textBlock}>
     <Text style={styles.smallText}>{props.productTitle}</Text>
     <View style={styles.quantSelector}>
     <TouchableOpacity onPress={() => {
       (Quantity > 0) ? setQuantity(Quantity - 1) : null;
       (Price > 0) ? setPrice((parseFloat(Price) - 264.60).toPrecision(5))
       : null;
     }}>
     <CircleMinus />
     </TouchableOpacity>
     <Text style={styles.quantity}>{Quantity}</Text>
     <TouchableOpacity onPress={() => {
       setQuantity(Quantity + 1);
       setPrice((parseFloat(Price) + 264.60).toPrecision(5));
     }}>
     <CirclePlus />
     </TouchableOpacity>
     </View>
    </View>
    <View style={styles.priceBlock}>
     <Text style={styles.smallTitle}>{Price + 'Р'}</Text>
     <Text style={styles.subTitle}>{Quantity + 'x' + '264.6Р'}</Text>
    </View>
     </View>

    </View>
  );
};
      


const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 10,
    paddingHorizontal: 2,
    height: 80,
    flexDirection: 'column',
  },
  cellContainer: {
    position: 'absolute',

  },
  innerWrapper: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(231, 229, 229, 0.5)',
    shadowOffset: {
    width: -2,
    height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 3,
    flex: 1,

  },
  imageWrapper: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  priceBlock: {
   alignItems: 'center',
   width: '20%',
  },
  quantity: {
    fontSize: 19,
  },
  smallTitle: {
    paddingVertical: 2,
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,

  },
  subTitle: {
    color: 'gray',
    fontSize: 11,
  },
  quantSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
    paddingTop: 10,
  }
})
