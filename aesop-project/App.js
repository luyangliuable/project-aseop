import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "./components/header";
import Footer from "./components/footer";
import style from "./components/style/main.js";

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
    };

    render() {
        return (
            <>
                <View style={style.main.container}>
                    <Header></Header>
                    <Image style={style.imageStyles.stretch} source={require('./images/logo.png')} />
                    <View style={[style.nameContainer.container, style.nameContainer.shadowProp]}>
                        <Text>Welcome {this.state.profile.firstname}</Text>
                    </View>
                    <StatusBar style="auto" />
                    <Footer></Footer>
                </View>
            </>
        );
    }
}


