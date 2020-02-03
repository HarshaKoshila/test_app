import React, { Component } from 'react'; 
import {
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text, 
    ImageBackground
} from 'react-native'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { styles } from './style';
import { BACKGROUND_COLOR } from '../../Utility/color' 

const { width, height } = Dimensions.get('window');

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { /* initial state */
        } 

    }
 


    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigateDetailScreen()}>
                 <ImageBackground 
                 style={ styles.imgBackground } 
                 resizeMode="center" 
                 source={{ uri: this.props.THUMB_URL }} >
                 <Text style={styles.titleText} numberOfLines={2}>{this.props.TITLE}</Text>
                 </ImageBackground>
            </TouchableOpacity>
        );
    }
} 

