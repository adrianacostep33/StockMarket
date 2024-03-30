import React, {ReactNode} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/colors';

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.dark500,
  },
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
