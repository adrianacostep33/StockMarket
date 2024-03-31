/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';
import Colors from '../constants/colors';
import axios from 'axios';
import {LineChart} from 'react-native-gifted-charts';

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

const StockDetails = ({route, navigation}: StockDetailsProps) => {
  const {stockId} = route.params;
  // console.log(stockId);

  const [stockPrices, setStockPrices] = useState<PriceData[]>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/stock-prices?ticker=${stockId}`)
      .then(response => {
        const pricesArray = response.data[0].prices;

        setStockPrices(pricesArray);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      });
  }, [stockId]);

  // const stocksPricesData = Object.values(stockPrices);

  console.log({stockPrices});

  useEffect(() => {
    navigation.setOptions({title: `${stockId}`});
  }, [navigation, stockId]);

  const positiveOverallPriceChange =
    stockPrices &&
    stockPrices[0].value < stockPrices[stockPrices.length - 1].value;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details: {stockId}</Text>
      {stockPrices && (
        <LineChart
          width={500}
          areaChart
          data={stockPrices}
          rotateLabel
          labelsExtraHeight={40}
          hideDataPoints
          spacing={450 / stockPrices.length - 2}
          color={positiveOverallPriceChange ? 'green' : 'red'}
          thickness={2}
          startFillColor={positiveOverallPriceChange ? 'green' : 'red'}
          endFillColor={positiveOverallPriceChange ? 'green' : 'red'}
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          hideYAxisText={true}
          rulesType="solid"
          rulesColor={Colors.dark800}
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripHeight: 140,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            pointerColor: 'lightgray',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: 'center',
                    marginTop: -30,
                    marginLeft: -40,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>
                    {items[0].date}
                  </Text>

                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'black',
                      }}>
                      {'$' + items[0].value.toFixed(2)}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      )}
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
