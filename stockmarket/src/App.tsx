import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTabs from './Navigation/NavigationTabs';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};
export default App;
