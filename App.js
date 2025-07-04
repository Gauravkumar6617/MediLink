import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/RootNavigation';
import store from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </Provider>
  );
}
