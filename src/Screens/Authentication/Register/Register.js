import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './style';
import COLORS from '../../../Common/Colors';

export default function Register() {
  const [activeTab, setActiveTab] = useState('user'); // 'user' or 'hospital'

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}><Image style={styles.image} source={require("../../../assets/Authentication/darklogo.png")}/>
        <Text style={styles.headingtext}>Medi<Text style={styles.headingend}>Link</Text></Text>
        <Text style={styles.accounttext}>Create Account</Text>
        {/* <Text style={styles.welcometext}>We are here to help you</Text> */}
        </View>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'user' && styles.activeTab]}
          onPress={() => setActiveTab('user')}
        >
          <Text style={styles.tabText}>User Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'hospital' && styles.activeTab]}
          onPress={() => setActiveTab('hospital')}
        >
          <Text style={styles.tabText}>Hospital Register</Text>
        </TouchableOpacity>
      </View>

      {/* Forms */}
      {activeTab === 'user' ? (
        <View style={styles.form}>
          {/* <Text style={styles.heading}>User Registration</Text> */}
          <View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="person-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Name"
      placeholderTextColor="#aaa"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="mail-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Email"
      placeholderTextColor="#aaa"
      keyboardType="email-address"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="call-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Phone"
      placeholderTextColor="#aaa"
      keyboardType="phone-pad"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="people-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Gender"
      placeholderTextColor="#aaa"
      keyboardType="web-search"
    />
  </View>
</View>

<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="lock-closed-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Password"
      placeholderTextColor="#aaa"
      secureTextEntry
    />
  </View>
</View>


          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register User</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          {/* <Text style={styles.heading}>Hospital Registration</Text> */}
          <View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="person-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Name"
      placeholderTextColor="#aaa"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="mail-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Email"
      placeholderTextColor="#aaa"
      keyboardType="email-address"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="call-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Phone"
      placeholderTextColor="#aaa"
      keyboardType="phone-pad"
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="text-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Description"
      placeholderTextColor="#aaa"
      secureTextEntry
    />
  </View>
</View>
<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="location-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Hospital Location"
      placeholderTextColor="#aaa"
      secureTextEntry
    />
  </View>
</View>

<View style={styles.inputcontainer}>
  <View style={styles.inputWrapper}>
    <Icon name="lock-closed-outline" size={20} color="#888" style={styles.iconStyle} />
    <TextInput
      style={styles.inputField}
      placeholder="Password"
      placeholderTextColor="#aaa"
      secureTextEntry
    />
  </View>
</View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register Hospital</Text>
          </TouchableOpacity>
        </View>
      )}
        <View style={styles.bottomTextWrapper}>
        <Text  style={styles.bottomText}>
          Already have an account?{" "}
          <Text style={styles.linkText}><Text style={{fontWeight:"700", color:COLORS.blueColor}}>Sign in</Text></Text>
        </Text>
      </View>
    </View>
  );
}
