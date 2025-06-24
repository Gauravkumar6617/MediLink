import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
const Stack=createNativeStackNavigator();
const RootNavigation = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='SplashScreen' component={SplashScreen}/>
    <Stack.Screen name='OnBoarding' component={OnBoarding}/>
</Stack.Navigator>
  )
}

export default RootNavigation
