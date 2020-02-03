/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

 import { MAIN_COLOR } from "../../Utility/color";
import styles from "./style";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  goBack = () => {
    this.props.goBack();
  };

  openDrawer = () => {
    this.props.openDrawerNav();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <ActivityIndicator size="large" color={MAIN_COLOR.primary_color} />
        </View>
      </View>
    );
  }
}
