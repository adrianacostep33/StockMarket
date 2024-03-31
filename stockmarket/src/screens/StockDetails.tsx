/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';
import Colors from '../constants/colors';
import axios from 'axios';
import {LineChart} from 'react-native-gifted-charts';
import {Image} from 'react-native';
import {formatCurrency} from '../utils/formatCurrency';

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
  const [stockPrices, setStockPrices] = useState<PriceData[]>();

  const {stock} = route.params;
  const {width} = useWindowDimensions();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/stock-prices?ticker=${stock.ticker}`)
      .then(response => {
        const pricesArray = response.data[0].prices;

        setStockPrices(pricesArray);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      });
  }, [stock.ticker]);

  useEffect(() => {
    navigation.setOptions({title: `${stock.ticker}`});
  }, [navigation, stock.ticker]);

  const positiveOverallPriceChange =
    stockPrices &&
    stockPrices[0].value < stockPrices[stockPrices.length - 1].value;

  return (
    <SafeAreaView style={styles.safeContainer}>
      {stock ? (
        <FlatList
          data={[1]}
          renderItem={() => (
            <View style={styles.mainContainer}>
              <View style={styles.mainDetailsContainer}>
                <Image style={styles.stockImage} source={{uri: stock.image}} />
                <View style={styles.titleContainer}>
                  <Text style={styles.ticker}>{stock.ticker}</Text>
                  <Text style={styles.title}>{stock.companyName}</Text>
                </View>
              </View>
              <View style={styles.stockValuesContainer}>
                <Text style={styles.price}>{formatCurrency(stock.price)}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color:
                      stock.priceChange < 0
                        ? Colors.red
                        : stock.priceChange > 0
                        ? Colors.green
                        : 'auto',
                  }}>
                  {formatCurrency(stock.priceChange)}{' '}
                  {stock.priceChangePercentage.toFixed(2)}%
                </Text>
              </View>
              <View style={styles.chartContainer}>
                {stockPrices && (
                  <LineChart
                    areaChart
                    data={stockPrices}
                    rotateLabel
                    labelsExtraHeight={40}
                    hideDataPoints
                    spacing={width / stockPrices.length - 1}
                    color={
                      positiveOverallPriceChange ? Colors.green : Colors.red
                    }
                    thickness={2}
                    startFillColor={
                      positiveOverallPriceChange ? Colors.green : Colors.red
                    }
                    endFillColor={
                      positiveOverallPriceChange ? Colors.green : Colors.red
                    }
                    startOpacity={0.9}
                    endOpacity={0.05}
                    initialSpacing={0}
                    hideYAxisText={true}
                    rulesType="solid"
                    rulesColor={Colors.dark800}
                    xAxisColor={Colors.light600}
                    yAxisColor={Colors.dark800}
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
                                color: Colors.light500,
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
                                backgroundColor: Colors.light500,
                              }}>
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                  color: Colors.dark800,
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
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsName}>CEO</Text>
                <Text style={styles.detailsData}>{stock.ceo}</Text>

                <Text style={styles.detailsName}>Exchange</Text>
                <Text style={styles.detailsData}>{stock.exchange}</Text>

                <Text style={styles.detailsName}>Sector</Text>
                <Text style={styles.detailsData}>{stock.sector}</Text>

                <Text style={styles.detailsName}>Industry</Text>
                <Text style={styles.detailsData}>{stock.industry}</Text>

                <Text style={styles.detailsName}>Location</Text>
                <Text style={styles.detailsData}>
                  {stock.city}, {stock.state}
                </Text>

                <Text style={styles.detailsName}>IPO</Text>
                <Text style={styles.detailsData}>{stock.ipoDate}</Text>

                <Text style={styles.detailsName}>Description</Text>
                <Text style={styles.detailsData}>{stock.description}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text>Stock Not Available</Text>
      )}
    </SafeAreaView>
  );
};

export default StockDetails;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.dark800,
  },
  mainContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 7,
  },
  mainDetailsContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    paddingLeft: 20,
    gap: 8,
  },
  ticker: {
    color: Colors.light500,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: Colors.light600,
    fontSize: 16,
  },
  stockImage: {
    width: 60,
    height: 60,
  },
  stockValuesContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  price: {
    color: Colors.light500,
    fontSize: 30,
    fontWeight: 'bold',
  },
  chartContainer: {
    flex: 1,
    marginTop: 30,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    color: Colors.light500,
  },
  detailsData: {
    fontSize: 15,
    marginTop: 5,
    color: Colors.light600,
  },
});
