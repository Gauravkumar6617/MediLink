import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Common/Dimension";
import COLORS from "../../Common/Colors";

const styles= StyleSheet.create({
    backgroundImage:{
height:SCREEN_HEIGHT,
width:SCREEN_WIDTH,
position:"absolute"

    },container: {
        flex: 1,                            // ✅ Full screen
        backgroundColor: COLORS.background,
        alignItems: "center",              // ✅ Horizontal center
        justifyContent: "center",          // ✅ Vertical center
      },
      
    logo:{width: 70,
        height: 70,
        resizeMode: "cover",
       


    }

});
export default styles;