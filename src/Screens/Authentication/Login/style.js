import { StyleSheet } from "react-native";
import COLORS from "../../../Common/Colors";

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor:"white",
    paddingBottom:20
  },
  imagewrapper: {
    alignItems: "center",
  },
  textstart: {
    fontSize: 18,
    paddingTop: 12,
  },
  textend: {
    fontWeight: "800",
  },
  welcomecontainer: {},
  Textwelcome: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  Textfine: {
    fontSize: 24,
    paddingHorizontal: 20,
    color: "#666",
  },
  inputcontainer: {
    paddingHorizontal: 20,
    gap: 20,
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
    paddingVertical: 15,
    color: "#000",
  },
  button: {
    backgroundColor: COLORS.darkteal,
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },
 forgotPassword: {
  alignItems: "flex-end",
  marginTop: 1,
},

linkText: {
  color: COLORS.blueColor,
  fontWeight: "600",
},

divider: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 20,
  marginHorizontal: 20,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: "#ccc",
},

orText: {
  marginHorizontal: 10,
  color: "#999",
},

googleButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 20,
  paddingVertical: 10,
  marginHorizontal: 20,
},

googleIcon: {
  width: 20,
  height: 20,
  marginRight: 10,
},

googleText: {
  fontSize: 16,
  color: "#333",
},

bottomTextWrapper: {
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
