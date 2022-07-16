import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./components/style/main.js";
// import Logo from "./images/logo.png";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                firstname: "Mike",
                lastname: "Bob",
                age: "5",
                dob: "12-12-2018"
            },
        };

        // window.alert(JSON.stringify( main ));
    };

    render() {
        return (
            <>
                <View style={style.main.container}>
                    <Image style={style.imageStyles.stretch} source={require('./images/logo.png')} />
                    <View style={style.nameContainer.container}>
                        <Text>Welcome {this.state.profile.firstname}</Text>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </>
        );
    }
}


