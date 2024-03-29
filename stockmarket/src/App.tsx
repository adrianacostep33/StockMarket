import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePageScreen from './screens/HomePageScreen';
import WatchListScreen from './screens/WatchListScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="WatchList"
          component={WatchListScreen}
          options={{title: 'Your watch list'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
