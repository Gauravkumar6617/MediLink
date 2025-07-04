import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const OnBoarding = () => {
  const navigation= useNavigation();
  const handleNavigation=()=>{
    navigation.navigate('OnBoardingSecond')
  } 
  return (

    <React.Fragment>
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={require('../../assets/OnBoarding/Image.png')}
      />
    </View>
    <View style={styles.section}><Text style={styles.topheading}>Meet Doctor Online</Text>
    <Text style={styles.content}>Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.</Text>
    <TouchableOpacity onPress={handleNavigation} style={styles.button}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
    <Text  style={styles.skip}>Skip</Text>
    </View>
    </React.Fragment>
  );
};

export default OnBoarding;
