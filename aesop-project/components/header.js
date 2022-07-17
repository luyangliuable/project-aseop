import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./style/header.js";
import Icon from "react-native-vector-icons/Ionicons";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify(style));
    };

    render() {
        return (
            <>
                <View style={style.container}>
                    <Text>
                        <Icon
                            name="ios-add"
                            color="#ccc"
                            size={50}
                        />
                    </Text>
                </View>
            </>
        );
    }
}
