import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

interface IconProps {
  focused: boolean;
  source: number;
}

export default function NavigationIcon({focused, source}: IconProps) {
  const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      tintColor: focused ? Colors.light600 : Colors.light500,
    },
  });
  return (
    <View>
      <Image source={source} style={styles.icon} />
    </View>
  );
}
