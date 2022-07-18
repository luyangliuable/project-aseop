import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import style from "./style/shadowprop";
import Icon from "react-native-vector-icons/Ionicons";

class HomeButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, this.props.style]}>
                <Icon
                    name="home"
                    color="#eee"
                    size={50}
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
                    name="ios-person-add"
                    color="#eee"
                    size={50}
                />
            </View>
        );
    }
}

export { HomeButton, ProfileButton };
