/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import WatchList from '../screens/WatchList';
import Buy from '../screens/Buy';
import Account from '../screens/Account';
import Colors from '../constants/colors';
import NavigationIcon from '../components/NavigationIcon';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: Colors.light600,
        tabBarInactiveTintColor: Colors.light500,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/home-icon.png')}
            />
          ),
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
