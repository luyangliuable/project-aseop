import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./style/header.js";
import HomeButton from "./buttons";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify(style));
    };

    render() {
        return (
            <>
              <View style={[ style.container, style.shadowProp ]}>
                    <Text>
                    <HomeButton />
                    {this.props.children}
                    </Text>
                </View>
            </>
        );
    }
}
