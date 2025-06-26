import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
 const handleSignInNavigation=()=>{
    navigation.navigate("Register")
  }
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.imagewrapper}>
        <Image source={require("../../../assets/Authentication/darklogo.png")} />
        <Text style={styles.textstart}>
          MEDI<Text style={styles.textend}>LINK</Text>
        </Text>
      </View>

      {/* Welcome */}
      <View style={styles.welcomecontainer}>
        <Text style={styles.Textwelcome}>Hi, Welcome Back</Text>
        <Text style={styles.Textfine}>Hope you’re doing fine.</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputcontainer}>
        <View style={styles.inputWrapper}>
          <Icon name="mail-outline" size={20} color="#888" style={styles.iconStyle} />
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Icon name="lock-closed-outline" size={20} color="#888" style={styles.iconStyle} />
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Google Sign-In */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../../assets/Authentication/google.png")} // add google icon here
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
{/* facebook sign in  */}
  <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../../assets/Authentication/hospital.png")} // add google icon here
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign in Hospital Administrator</Text>
      </TouchableOpacity>
      {/* Don't have account */}
      <View style={styles.bottomTextWrapper}>
        <Text  onPress={handleSignInNavigation} style={styles.bottomText}>
          Don't have an account?{" "}
          <Text style={styles.linkText}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
