import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { RightButton, LeftButton, StartButton } from "./buttons";
import Header from "./header";
import Footer from "./footer";
import style from "./style/main.js";

export default class DepartmentSelectionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <View style={style.main.container}>
                <Text>Choose Department</Text>
            </View>
        );
    }
}
