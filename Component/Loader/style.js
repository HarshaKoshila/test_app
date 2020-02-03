import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

 
export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF60",
    position: "absolute",
  },

  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
