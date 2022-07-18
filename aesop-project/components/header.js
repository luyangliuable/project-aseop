import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./style/header.js";
import buttonstyle from "./style/buttons.js";
import {HomeButton, ProfileButton} from "./buttons";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify( buttonstyle.floatright ));
    };

    render() {
        return (
            <>
              <View style={[ style.container, style.shadowProp ]}>
                <HomeButton style={buttonstyle.base} />
                <ProfileButton style={[ buttonstyle.floatright, buttonstyle.base ]} navigation={this.props.navigation} />
                <Text>{this.props.children}</Text>
                </View>
            </>
        );
    }
}
