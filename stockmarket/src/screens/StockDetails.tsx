import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StockDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StockDetails</Text>
    </View>
  );
};

export default StockDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
