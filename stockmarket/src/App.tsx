import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTabs from './Navigation/NavigationTabs';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};
export default App;
