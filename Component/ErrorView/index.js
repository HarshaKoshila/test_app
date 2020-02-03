import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
 
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
 import styles from "./style";

 export default class App extends Component {
  onPressTryAgain = () => {
    this.props.tryAgain();
  };

  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.center}>
           <Image
            style={{ width: wp("15%"), height: wp("15%") }}
            resizeMode="contain"
            source={this.props.ERROR_TYPE === "NETWORK"? require("../../Image/no_internet/no_internet.png") : require("../../Image/warning/warning.png") }
          />
          <Text style={styles.textStyle}>
            { this.props.ERROR_TYPE === "NETWORK"?  "Network Error" : "Technical Error" }
          </Text>
          <TouchableOpacity onPress={this.onPressTryAgain}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 