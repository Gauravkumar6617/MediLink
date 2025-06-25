import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import TestComponent from '../test/TestComponent';
const Stack=createNativeStackNavigator();
const RootNavigation = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='SplashScreen' component={SplashScreen}/>
    <Stack.Screen name='OnBoarding' component={OnBoarding}/>
    <Stack.Screen name='TestComponent' component={TestComponent}/>
</Stack.Navigator>
  )
}

export default RootNavigation
