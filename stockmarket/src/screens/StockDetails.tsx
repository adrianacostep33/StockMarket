import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';
import Colors from '../constants/colors';

type StockDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'StockDetails'
>;

const StockDetails = ({route, navigation}: StockDetailsProps) => {
  const {stockId} = route.params;

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
