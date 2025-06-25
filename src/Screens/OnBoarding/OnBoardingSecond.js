import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const OnBoardingSecond = () => {
  const navigation= useNavigation();
  const handleNavigation=()=>{
    navigation.navigate('OnBoardingThird')
  } 
  return (

    <React.Fragment>
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={require('../../assets/OnBoarding/onboardin2.png')}
      />
    </View>
    <View style={styles.section}><Text style={styles.topheading}>Connect with Specialists</Text>
    <Text style={styles.content}>Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.</Text>
    <TouchableOpacity  onPress={handleNavigation} style={styles.button}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
    <Text  style={styles.skip}>Skip</Text>
    </View>
    </React.Fragment>
  );
};

export default OnBoardingSecond;
