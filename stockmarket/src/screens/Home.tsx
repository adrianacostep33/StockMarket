import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import ScreenWrapper from '../components/ScreenWrapper';
import Colors from '../constants/colors';
import StockListItem from '../components/StockListItem';
import {Stock} from '../constants/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      });
  }, []);

  const stocksData = Object.values(stocks);

  return (
    <ScreenWrapper>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Available Stocks</Text>
        <FlatList
          data={stocksData}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{gap: 30, padding: 10}}
          renderItem={item => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('StockDetails', {
                    stockId: item.item.ticker,
                  })
                }>
                <StockListItem stock={item.item} />
              </Pressable>
            );
          }}
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
