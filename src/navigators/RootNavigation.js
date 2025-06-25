import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import TestComponent from '../test/TestComponent';

// Onboarding Screens
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import OnBoardingSecond from '../Screens/OnBoarding/OnBoardingSecond';
import OnBoardingThird from '../Screens/OnBoarding/OnBoardingThird';

const RootStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();


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


// ✅ Root Navigator (main entry)
const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="OnboardingFlow" component={OnboardingNavigator} />
      <RootStack.Screen name="TestComponent" component={TestComponent} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
