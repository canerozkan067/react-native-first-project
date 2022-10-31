import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

const StoreCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <View>
          <Text style={styles.price}>{product.price}</Text>
          {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    margin: 8,
  },
  inner_container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    color: '#333333',
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default StoreCard;
