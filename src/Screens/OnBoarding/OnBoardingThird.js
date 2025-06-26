import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const OnBoardingThird = () => {
  const navigation= useNavigation();
  const handleNavigation=()=>{
    navigation.navigate('AuthenticationFlow')
  } 
  return (

    <React.Fragment>
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={require('../../assets/OnBoarding/OnBoardingThird.png')}
      />
    </View>
    <View style={styles.section}><Text style={styles.topheading}>Thousands of Online Specialists</Text>
    <Text style={styles.content}> Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs.</Text>
    <TouchableOpacity onPress={handleNavigation} style={styles.button}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
    <Text  style={styles.skip}>Skip</Text>
    </View>
    </React.Fragment>
  );
};

export default OnBoardingThird;
