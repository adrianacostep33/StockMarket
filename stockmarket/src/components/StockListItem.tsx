/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Stock} from '../constants/types';
import Colors from '../constants/colors';
import {Image} from 'react-native';

interface StockListItemProps {
  stock: Stock;
}

const StockListItem = ({stock}: StockListItemProps) => {
  const change = stock.priceChangePercentage;
  console.log(stock.image);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: stock.image}} />
      <View style={styles.leftContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.symbol}>{stock.ticker}</Text>
          <Image
            style={styles.icon}
            source={require('../assets/images/star-empty-icon.png')}
          />
        </View>
        <Text style={styles.name}>{stock.companyName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.price}>${stock.price.toFixed(1)}</Text>
        <Text
          style={{
            color: change > 0 ? Colors.green : Colors.red,
            fontFamily: 'monospace',
            fontSize: 14,
          }}>
          {change > 0 ? '+' : ''}
          {change.toFixed(1)}%
        </Text>
      </View>
    </View>
  );
};

export default StockListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  leftContainer: {
    flex: 1,
    gap: 5,
  },
  rightContainer: {
    alignItems: 'flex-end',
    gap: 6,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    color: Colors.light600,
  },
  image: {
    width: 40,
    height: 40,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
  name: {
    fontSize: 16,
    color: Colors.light600,
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: Colors.light600,
  },
  price: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: Colors.light600,
  },
});
