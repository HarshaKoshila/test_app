import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { BACKGROUND_COLOR, MAIN_COLOR, FONT_COLOR } from "../../Utility/color";
 
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
    backgroundColor: BACKGROUND_COLOR.white_color
  },

  separaterLine: {
    width: wp("2%"), 
    backgroundColor: BACKGROUND_COLOR.white_color,
  },

  titleView: {
    height: "auto",
    width: wp("93%"), 
    marginTop: wp("5%"),
    //borderWidth: 1
  },

  titleText: {
    color: FONT_COLOR.black_color,
    fontSize: RFValue(13), 
    fontWeight: "bold",
    textTransform: 'capitalize'
  },

  imageSliderView: {
    height: "auto",
    width, 
    marginTop: wp("10%"),
    paddingTop: wp("6%"),
    paddingBottom: wp("6%"),
    backgroundColor: BACKGROUND_COLOR.gray_color_light,
    //borderWidth: 1
  },

  detailText: {
    color: FONT_COLOR.black_color,
    fontSize: RFValue(13)
  }
 
});
