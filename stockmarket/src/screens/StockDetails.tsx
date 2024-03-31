import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';
import Colors from '../constants/colors';
import axios from 'axios';
// import {LineChart} from 'react-native-gifted-charts';

type StockDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'StockDetails'
>;

type PriceData = {
  value: number;
  date: string;
  label?: string;
  labelTextStyle?: {
    color: string;
    width: number;
  };
};

type StockPrice = {
  ticker: string;
  prices: PriceData[];
};

const StockDetails = ({route, navigation}: StockDetailsProps) => {
  const {stockId} = route.params;

  const [stockPrices, setStockPrices] = useState<StockPrice>();

  useEffect(() => {
    axios
      .get('http://localhost:3000/stock-prices')
      .then(response => {
        setStockPrices(response.data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log({stockPrices});

  useEffect(() => {
    navigation.setOptions({title: `${stockId}`});
  }, [navigation, stockId]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details: {stockId}</Text>
    </View>
  );
};

export default StockDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark800,
  },
  text: {
    color: 'white',
  },
});
