import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import style from "./style/shadowprop";
import Icon from "react-native-vector-icons/Ionicons";


const defaultIconSize = 30;

class HomeButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, this.props.style]}>
                <Icon
                    onPress = {this.props.action}
                    name="home"
                    color="#eee"
                    size={defaultIconSize}
                />
            </View>
        );
    }
}


class ProfileButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, this.props.style]}>
                <Icon
                    onPress={this.props.action}
                    name="ios-person-add"
                    color="#eee"
                    size={defaultIconSize}
                // onPress={() =>
                // }
                />
            </View>
        );
    }
}

export { HomeButton, ProfileButton };
