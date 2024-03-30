import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Colors from '../constants/colors';
import axios from 'axios';

interface Stock {
  symbol: string;
  name: string;
  exchange: string;
  mic_code: string;
  currency: string;
  datetime: string;
  timestamp: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  previous_close: string;
  change: string;
  percent_change: string;
  average_volume: string;
  is_market_open: boolean;
  fifty_two_week: {
    low: string;
    high: string;
    low_change: string;
    high_change: string;
    low_change_percent: string;
    high_change_percent: string;
    range: string;
  };
}

type StocksData = {
  [key: string]: Stock;
};

const Home = () => {
  const [stocks, setStocks] = useState<StocksData>({});

  useEffect(() => {
    axios
      .get('http://localhost:3000/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const stocksData = Object.values(stocks);

  console.log(stocksData[0]);

  return (
    <ScreenWrapper>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Available Stocks</Text>
        <FlatList
          data={stocksData}
          renderItem={item => <Text>{item.name}</Text>}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 5,
    color: Colors.light500,
  },
});
