/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { ScrollView, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ActivityIndicator, RefreshControl } from "react-native";
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
      isLoading: false,
      isError: false,

      postDetail: [],
      page: 0,
      refreshFlatList: false

    }
  }

  componentDidMount() {
    this.getPostDetail();
    this.getAlbumDetail();
  }


  /**
 * Get individual Post Detail from API and data is stored as state
 */
  async getPostDetail() {
    const POST_ID = this.props.navigation.state.params && this.props.navigation.state.params.POST_ID || "";
    this.setState({ isLoading: true })
    const response = await getPostFromID(POST_ID).then(data => data)
    if (response) {
      this.setState({
        isLoading: false,
        postDetail: response,
      })
    }
    else {
      this.setState({ isLoading: false, isError: true })
    }
  }

  /**
 * Get Photo list of particular Album from API and data is stored as state
 */
  async getAlbumDetail() {
    this.setState({ isLoading: true })
    const response = await getAlbumFromID(1).then(data => data)
    if (response) {
      this.setState({
        isLoading: false,
        albumPhotoList: response,
      })
    }
    else {
      this.setState({ isLoading: false, isError: true })
    }
  }

  /**
    * Navigate to Second screen
    */
  navigateImageViewScreen = (image_url) => {
    this.props.navigation.navigate("ThirdScreen", { IMAGE_URL: image_url })
  }

  /**
  * 
  * @param {*item, index} param0 
  * Render Image Album item reusable component
  */
  renderFlatListItem({ item, index }) {
    return (
      <ImageSliderItem key={index} TITLE={item.title || ""} THUMB_URL={item.thumbnailUrl || ""} navigateDetailScreen={() => this.navigateImageViewScreen(item.url || "")} />);
  }

  /**
  * Add a separator between Post Item
  */
  renderSeparatorView = () => {
    return (
      <View style={styles.separaterLine} />
    )
  }



  render() {
    console.log("albumPhotoList :", this.state.albumPhotoList && this.state.albumPhotoList[0])
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: MAIN_COLOR.primary_color }} forceInset={{ bottom: 'never', top: 'always' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Header TITLE="Second Screen" OPEN_MENU={() => this.props.navigation.goBack()} />
          </View>

          <View style={styles.center}>

            <View style={styles.titleView}>
              <Text style={styles.titleText}>{this.state.postDetail && this.state.postDetail.title}</Text>
            </View>

            <View style={styles.titleView}>
              <Text style={styles.detailText}>{this.state.postDetail && this.state.postDetail.body}</Text>
            </View>

            {!this.state.isLoading? <View style={styles.imageSliderView}>
              <FlatList
                data={this.state.albumPhotoList || []}
                renderItem={this.renderFlatListItem.bind(this)}
                keyExtractor={(item) => (item.id || 0).toString()}
                ItemSeparatorComponent={() => this.renderSeparatorView()}
                ListHeaderComponent={() => <View style={{ width: wp("3%") }} />}
                ListFooterComponent={() => <View style={{ width: wp("3%") }} />}
                showsHorizontalScrollIndicator={false}
                horizontal />
            </View> : null }

            {this.state.page == 0 && this.state.isLoading ? <LOADER /> : this.state.isError ? <ERROR_SCREEN tryAgain={this.onPressTryAgain} /> : null}
          </View>

        </View>
      </SafeAreaView>
    );
  }
}
