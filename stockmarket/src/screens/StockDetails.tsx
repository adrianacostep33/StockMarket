import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/StockStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Colors from '../constants/colors';

type StockDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'StockDetails'
>;

const StockDetails = ({route}: StockDetailsProps) => {
  const {stockId} = route.params;

  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
