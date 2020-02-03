import React, { Component } from 'react'; 
import {
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text, 
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
            <View style={styles.container}> 
                    <TouchableOpacity disabled={this.props.LOGO? true : false } style={styles.drawerButtonView} onPress={() => this.props.OPEN_MENU && this.props.OPEN_MENU()}>
                        <Image
                            style={styles.iconStyle}
                            source={this.props.LOGO? require('../../Image/logo/logo.png') : require('../../Image/btn_icon/arrow-left/arrow-left.png') }
                        />
                    </TouchableOpacity> 
                    <Text style={styles.titleText}>{this.props.TITLE || ""}</Text>
            </View>
        );
    }
} 

