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
import {Pressable, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              focused={focused}
              source={require('../assets/images/home-icon.png')}
            />
          ),
          header: () => (
            <SafeAreaView style={styles.headerContainer}>
              <Pressable style={styles.searchInputContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Stock..."
                  placeholderTextColor={Colors.light500}
                  activeUnderlineColor={Colors.light600}
                  textColor={Colors.light500}
                />
              </Pressable>
            </SafeAreaView>
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
    backgroundColor: Colors.dark500,
    color: Colors.light500,
    // borderRadiusBottom: 10,
  },
});
