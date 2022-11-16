import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StartButton } from "./buttons";

///////////////////////////////////////////////////////////////////////////////
//                             Import components                             //
///////////////////////////////////////////////////////////////////////////////
import Footer from "./footer";
import style from "./style/main.js";


export default class App extends Component {
    constructor(props) {
        super(props);

        ////////////////////////////////////////////////////////////////////////////
        // TODO: The profile information is hard coded. Refactor to store locally //
        ////////////////////////////////////////////////////////////////////////////

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
                <Image style={style.imageStyles.stretchSmall} source={require('../images/hospital_logo.png')} />
                <Footer>
                    <StartButton navigation={this.props.navigation} />
                    {/* <LeftButton navigation={this.props.navigation} style={{visibility: false}} /> */}
                    {/* <RightButton navigation={this.props.navigation} style={{ visibility: false }} /> */}
                </Footer>
            </View>
        );
    }
}
