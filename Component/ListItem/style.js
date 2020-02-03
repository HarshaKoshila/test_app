import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BACKGROUND_COLOR, MAIN_COLOR, FONT_COLOR } from '../../Utility/color'  

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    height: wp("20%"), 
    width: wp("93%"),
    backgroundColor: BACKGROUND_COLOR.white_color,
    //alignItems: 'center',
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: MAIN_COLOR.primary_color,
    zIndex: 100,
    padding: 10
  },

   
  titleText: {
    color: FONT_COLOR.black_color,
    fontSize: RFValue(14),
    textTransform: 'capitalize'
  }

});