import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useContext, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { RightButton, LeftButton, StartButton } from "./buttons";
import Header from "./header";
import Footer from "./footer";
import style from "./style/main.js";


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
            <View style={style.main.container}>
                <Image style={style.imageStyles.stretch} source={require('../images/logo.png')} />
                <View style={[style.nameContainer.container, style.nameContainer.shadowProp]}>
                    <Text>Welcome {this.state.profile.firstname}</Text>
                </View>
                <StatusBar style="auto" />
                <Footer>
                  <StartButton navigation={this.props.navigation} />
                  {/* <LeftButton navigation={this.props.navigation} style={{visibility: false}} /> */}
                  {/* <RightButton navigation={this.props.navigation} style={{ visibility: false }} /> */}
                </Footer>
            </View>
        );
    }
}
