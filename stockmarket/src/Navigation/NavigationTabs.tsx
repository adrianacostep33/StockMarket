/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import WatchList from '../screens/WatchList';
import Buy from '../screens/Buy';
import Account from '../screens/Account';
import Colors from '../constants/colors';

const Tab = createBottomTabNavigator();

interface IconProps {
  focused: boolean;
}

const HomeIcon = ({focused}: IconProps) => (
  <Image
    source={require('../assets/images/home-icon.png')}
    style={{
      width: 20,
      height: 20,
      tintColor: focused ? Colors.light600 : Colors.light500,
    }}
  />
);

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
          tabBarIcon: ({focused}) => <HomeIcon {...{focused}} />,
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/exchange-money-icon.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.light600 : Colors.light500,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/male-icon.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.light600 : Colors.light500,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/watch-list-icon.png')}
              style={{
                width: 24,
                height: 18,
                tintColor: focused ? Colors.light600 : Colors.light500,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
