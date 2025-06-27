import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import TestComponent from '../test/TestComponent';

// Onboarding Screens
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import OnBoardingSecond from '../Screens/OnBoarding/OnBoardingSecond';
import OnBoardingThird from '../Screens/OnBoarding/OnBoardingThird';
import Login from '../Screens/Authentication/Login/Login';
import Register from '../Screens/Authentication/Register/Register';
import UserHomeScreen from '../Screens/HomeScreen/UserHomeScreen/UserHomeScreen';
import {UserHomeNavigator} from './UserBottomNavigator';

const RootStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const AuthenticationStack= createNativeStackNavigator();
const UserHomeScreenStack= createNativeStackNavigator();


// ✅ Onboarding Navigator Function (sub-navigator)
export const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen name="OnBoarding" component={OnBoarding} />
      <OnboardingStack.Screen name="OnBoardingSecond" component={OnBoardingSecond} />
      <OnboardingStack.Screen name="OnBoardingThird" component={OnBoardingThird} />
    </OnboardingStack.Navigator>
  );
};

export const AuthenticationNavigator=()=>{
  return(
<AuthenticationStack.Navigator screenOptions={{headerShown:false}}>
  <AuthenticationStack.Screen name='Login' component={Login}/>
  <AuthenticationStack.Screen name='Register' component={Register}/>
</AuthenticationStack.Navigator>
  );
}

export const UserHomeScreenNavigator=()=>{
  return(
<UserHomeScreenStack.Navigator screenOptions={{headerShown:false}}>
  <UserHomeScreenStack.Screen name='UserHomeNavigator' component={UserHomeNavigator}/>
</UserHomeScreenStack.Navigator>
  );
}

// ✅ Root Navigator (main entry)
const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="OnboardingFlow" component={OnboardingNavigator} />
      <RootStack.Screen name="TestComponent" component={TestComponent} />
      <RootStack.Screen name='AuthenticationFlow' component={AuthenticationNavigator}/>
      <RootStack.Screen name='UserHomeFlow' component={UserHomeScreenNavigator}/>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
