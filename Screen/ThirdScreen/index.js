/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { ScrollView, View, Text, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import styles from "./style";

import Header from "../../Component/MainHeader";
import ImageSliderItem from "../../Component/ImageSliderItem";
import LOADER from "../../Component/Loader";
import ERROR_SCREEN from "../../Component/ErrorView";

import { BACKGROUND_COLOR, MAIN_COLOR } from "../../Utility/color";
import { getPostFromID, getAlbumFromID } from "../../Controller/post";


const { width } = Dimensions.get("window");

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      //Get url of full screen image via react navigator and set as State
      IMAGE_URL: props.navigation.state.params && props.navigation.state.params.IMAGE_URL || "" 
    }
  }



  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: MAIN_COLOR.primary_color }} forceInset={{ bottom: 'never', top: 'always' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Header TITLE="Third Screen" OPEN_MENU={() => this.props.navigation.goBack()} />
          </View>

          <View style={styles.center}>

            <Image
              style={styles.imgBackground}
              resizeMode="contain"
              source={{ uri: this.state.IMAGE_URL }} />

          </View>
        </View>
      </SafeAreaView>
    );
  }
}
