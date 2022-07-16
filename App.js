import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from "./images/logo.png";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {profile: {
            firstname: "Mike",
            lastname: "Bob",
            age: "5",
            dob: "12-12-2018"
        },
                     };

    }

    render() {
        return (
                <View style={main.container}>
                <Image style={imageStyles.stretch} source={ require('./images/logo.png') } />
                <View style={nameContainer.container}>
                <Text>Welcome {this.state.profile.firstname}</Text>
                </View>
                <StatusBar style="auto" />
                </View>
        );
    }
}


const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const nameContainer = StyleSheet.create({
    container: {
        backgroundColor: '#8ED8F3',
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 220,
    },
});


const imageStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 220,
        height: 200,
        resizeMode: 'stretch',
    },
});
