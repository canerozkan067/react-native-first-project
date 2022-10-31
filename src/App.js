import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import data from './product-data.json';
import StoreCard from './components/StoreCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BEYSOSKO STORE</Text>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <StoreCard product={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'purple',
    textAlign: 'center',
    margin: 20,
  },
});

export default App;
