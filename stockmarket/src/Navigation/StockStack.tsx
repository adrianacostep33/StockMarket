/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import StockDetails from '../screens/StockDetails';
import {Pressable, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Colors from '../constants/colors';

export type RootStackParamList = {
  Home: undefined;
  StockDetails: {stockId: number};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StockStack = () => {
  return (
    <Stack.Navigator initialRouteName="StockDetails">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => (
            <SafeAreaView style={styles.headerContainer}>
              <Pressable style={styles.searchInputContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Stock..."
                  placeholderTextColor={Colors.light500}
                />
              </Pressable>
            </SafeAreaView>
          ),
        }}
      />
      <Stack.Screen name="StockDetails" component={StockDetails} />
    </Stack.Navigator>
  );
};

export default StockStack;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark800,
  },
  searchInputContainer: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 38,
    paddingHorizontal: 10,
    backgroundColor: Colors.dark500,
    color: Colors.light500,
    // borderRadiusBottom: 10,
  },
});
