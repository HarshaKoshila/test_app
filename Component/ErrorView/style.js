import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

import { HEADER_COLOR, MAIN_COLOR } from "../../Utility/color"
export default StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000060",
    position: "absolute",
  },

  center: {
    width: wp("90%"),
    height: wp("80%"),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: RFValue(20),
    color: "#bcbfc2",
    marginTop: wp("6%"),
  },

  buttonText: {
    fontSize: RFValue(12),
    color: "#0586ff",
  },

});
