import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BACKGROUND_COLOR, MAIN_COLOR } from '../../Utility/color'  

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    height: "100%",
    flexDirection: 'row',
    width: width,
    backgroundColor: MAIN_COLOR.primary_color,
    alignItems: 'center', 
    zIndex: 100
  },

  iconStyle: {
    width: wp("5.9%"),
    height: wp("5.9%"),
    alignItems: "flex-end",
    //backgroundColor: "red"
  },

  drawerButtonView: { 
    width: "20%",
    height: "70%",
    position: "absolute",
    paddingLeft: wp("3%"), 
    justifyContent: "center"
  },

  cartHighlightView: {
    height: width/20,
    width: width/20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width/40,
    backgroundColor: MAIN_COLOR.second_color,
    position: "absolute",
    right: -wp("2%"),
    top: -wp("2%")
  },

  cartNumText: {
    color: "#FFFFFF",
    fontSize: RFValue(10)
  },

  titleText: {
    color: "#FFFFFF",
    fontSize: RFValue(18),
    marginLeft: wp('13.5%')
  }

});