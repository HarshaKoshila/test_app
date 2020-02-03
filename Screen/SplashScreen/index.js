
import React, { Component } from 'react';
import { 
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import { resetStack } from "../../Controller/navigateCtrl"
import { styles } from "./style";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(()=> this.props.navigation.dispatch(resetStack("FirstScreen")) , 1500);
    }

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.center}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../Image/logo/logo.png')}
                        resizeMode="contain"
                    />
                </View>


            </View>
        );
    }
}


