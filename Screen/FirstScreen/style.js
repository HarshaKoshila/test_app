import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { BACKGROUND_COLOR, MAIN_COLOR, SAFE_AREA_COLOR } from "../../Utility/color";
 
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: MAIN_COLOR.primary_color,
  },

  container: {
    flex: 1,
  },

  top: {
    flex: 0.9,
    width,
  },

  center: {
    flex: 10,
    width,
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR.white_color,
  },

  separaterLine: {
    height: wp("2%"), 
    backgroundColor: BACKGROUND_COLOR.white_color,
  }
 
});
