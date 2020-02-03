import React, { Component } from "react";
import { View, Dimensions, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { SafeAreaView } from "react-navigation";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import NetInfo from "@react-native-community/netinfo";

//Reusable Component
import Header from "../../Component/MainHeader";
import ListItem from "../../Component/ListItem";
import LOADER from "../../Component/Loader";
import ERROR_SCREEN from "../../Component/ErrorView";

import styles from "./style";
import { BACKGROUND_COLOR, MAIN_COLOR } from "../../Utility/color";

//Controller
import { getPostList } from "../../Controller/post";
import { getDataFromAsyncStorage, setDataToAsyncStorage } from "../../Controller/asyncCtrl";


const { width } = Dimensions.get("window");

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isError: false,

      postList: [],
      page: 0,
      refreshFlatList: false

    }
  }

  componentDidMount() {
    this.setState({ page: 0, }, this.getPostList) 
  }
 
   /**
    * Get data from Async Storage
    */
  async readAsyncStorage() {
    const POST_LIST = await getDataFromAsyncStorage("post_list"); 
    this.setState({ postList: POST_LIST })
  }

  /**
   * Get Post list from API and data is stored as state
   */
  async getPostList() {
    this.setState({ isLoading: true })
    const response = await getPostList(this.state.page).then(data => data)
    if (response) {
      this.setState({
        isLoading: false,
        screenRefreshing: false,
        nextPage: response,
        postList: this.state.page === 0 ? response : [...this.state.postList, ...response],
        isFooterLoading: false
      })

      //Stored only First 10 post to Async Storage(this has been used when App has no internet connectivity)
      //this.state.page === 0 ? setDataToAsyncStorage("post_list", response) : null;

    }
    else {
      this.setState({ isLoading: false, screenRefreshing: false, isError: true, isFooterLoading: false })
    }
  }

  /**
   * Navigate to Second screen
   */
  navigateDetailScreen = (post_id) => {
    this.props.navigation.navigate("SecondScreen", { POST_ID: post_id })
  }


  /**
   * 
   * @param {*item, index} param0 
   * Render Post item reusable component
   */
  renderFlatListItem({ item, index }) {
    return (
      <ListItem key={index} TITLE={item.title || ""} navigateDetailScreen={() => this.navigateDetailScreen(item.id)} />);
  }


  /**
   * Setting PullToRefresh(Upadate with the API)
   */
  onPullToRefresh = () => {
    this.setState({ screenRefreshing: true, page: 0 }, this.getPostList)
  }

  /**
   * Setting Lazy Loader(Only user is scrolling down, App request data from API and rendering  )
   */
  handleLoadMoreData = () => {
    if (this.state.nextPage && this.state.nextPage.length != 0) {
      this.setState({ isFooterLoading: true, page: this.state.page + 10 }, this.getPostList)
    }
  }



  /**
   * Set Loader when user is scrolling down
   */
  renderFooterLoader = () => {
    return (
      this.state.isFooterLoading ?
        <View style={{ marginTop: wp("3%"), height: wp("50%"), alignItems: "center" }}>
          <ActivityIndicator size="large" color={MAIN_COLOR.primary_color} />
        </View>
        : null
    )
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
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: MAIN_COLOR.primary_color }} forceInset={{ bottom: 'never', top: 'always' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Header LOGO TITLE="Main Screen" />
          </View>

          <View style={styles.center}>
            <FlatList
              data={this.state.postList || []}
              renderItem={this.renderFlatListItem.bind(this)}
              keyExtractor={(item) => (item.id).toString()}
              onEndReached={this.handleLoadMoreData}
              onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.13}
              ItemSeparatorComponent={() => this.renderSeparatorView()}
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={this.state.screenRefreshing} onRefresh={this.onPullToRefresh} />}
              ListHeaderComponent={() => <View style={{ height: wp("3%") }} />}
              ListFooterComponent={() => this.state.isFooterLoading ? this.renderFooterLoader() : (<View style={{ height: wp("10%") }} />)}
            />


          </View>

          {this.state.page == 0 && this.state.isLoading ? <LOADER /> : this.state.isError ? <ERROR_SCREEN tryAgain={this.onPressTryAgain} /> : null}
          {this.state.isError ? <ERROR_SCREEN tryAgain={this.onPressTryAgain} /> : null}

        </View>
      </SafeAreaView>
    );
  }
}
