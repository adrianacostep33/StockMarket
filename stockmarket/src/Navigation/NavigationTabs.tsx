/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WatchList from '../screens/WatchList';
import Buy from '../screens/Buy';
import Account from '../screens/Account';
import Colors from '../constants/colors';
import NavigationIcon from '../components/NavigationIcon';
import StockStack from './StockStack';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.dark800,
        },
        tabBarStyle: {
          backgroundColor: Colors.dark600,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.light600,
        tabBarInactiveTintColor: Colors.light500,
      }}>
      <Tab.Screen
        name="StockStack"
        component={StockStack}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/home-icon.png')}
            />
          ),
          // header: () => (
          //   <SafeAreaView style={styles.headerContainer}>
          //     <Pressable style={styles.searchInputContainer}>
          //       <TextInput
          //         style={styles.searchInput}
          //         placeholder="Search Stock..."
          //         placeholderTextColor={Colors.light500}
          //         activeUnderlineColor={Colors.light600}
          //         textColor={Colors.light500}
          //       />
          //     </Pressable>
          //   </SafeAreaView>
          // ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/exchange-money-icon.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/male-icon.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/watch-list-icon.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
