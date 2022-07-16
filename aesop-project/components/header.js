import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./components/style/main.js";
// import Logo from "./images/logo.png";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify( main ));
    };

    render() {
        return (
            <>
                <View style={style.main.container}>
                </View>
            </>
        );
    }
}


