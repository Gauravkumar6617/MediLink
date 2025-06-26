import { StyleSheet } from "react-native";
import COLORS from "../../../Common/Colors";

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 6,
  },
  headingtext: {
    color: "#000",
    fontSize: 22,
    fontWeight: "light",
  },
  headingend: {
    color: "#000",
    fontWeight: "bold",
  },
  accounttext: {

    fontSize: 22,
    fontWeight: "300",
    marginTop: 18,
    
    color: "#222",
  },
  welcometext: {
    fontSize: 14,
    color: "#666",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#ffff",
    borderRadius: 8,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
    borderBottomWidth: 2,
    
    borderColor: "transparent",
    backgroundColor: "#fff",
  },
  activeTab: {
    borderColor: COLORS.darkteal,
   
  },
  tabText: {
    fontWeight: "600",
    color: "#333",
  },

  form: {
    
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: COLORS.darkteal,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  inputcontainer: {
    paddingHorizontal: 0
    ,paddingVertical:8,
    // backgroundColor:"black",
    
    marginBottom:10
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputfiedcolor,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    paddingVertical: 13,
    color: "#000",
  },bottomTextWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  
  bottomText: {
    fontSize: 14,
    color: "#555",
  },textButton:{
      color:"white",
      fontWeight:"600"
  }
});

export default styles;
