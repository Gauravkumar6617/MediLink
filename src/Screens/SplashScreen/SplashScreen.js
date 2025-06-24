import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const SplashScreen = () => {
  const navigation=useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
    navigation.navigate("OnBoarding")
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  
  return (
   <React.Fragment>
    <View style={styles.container}><Image style={styles.backgroundImage} source={require("../../assets/bg.png")}/>
    <Image style={styles.logo} source={require("../../assets/logo.png")}/>
    </View>
    </React.Fragment>
  )
}

export default SplashScreen
