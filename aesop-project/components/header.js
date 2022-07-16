import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./style/header.js";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify(style));
    };

    render() {
        return (
            <>
                <View style={style.container}>
                    <Text>poo</Text>
                </View>
            </>
        );
    }
}
