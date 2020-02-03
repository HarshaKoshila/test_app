import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BACKGROUND_COLOR, MAIN_COLOR, FONT_COLOR } from '../../Utility/color'  

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    height: wp("25%"), 
    width: wp("25%"),
    backgroundColor: BACKGROUND_COLOR.white_color,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: MAIN_COLOR.primary_color,
    zIndex: 100,
    padding: 5
  },

  titleText: {
    color: FONT_COLOR.black_color,
    fontSize: RFValue(10),
    textTransform: 'capitalize'
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "flex-end",
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#00000080",
    padding: 5,
    flex: 1 
},

});