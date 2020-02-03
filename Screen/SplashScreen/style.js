import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { MAIN_COLOR, BACKGROUND_COLOR } from "../../Utility/color"
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR.white_color
  },


  center: {
    width: width,
    height: "auto",
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }


});