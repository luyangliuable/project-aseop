import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import style from "./style/shadowprop";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const defaultIconSize = 30;


class RightButton extends Component {
    constructor(props) {
        super(props);
        // window.alert(Icon.getFontFamily());

    };

    render() {
        return (
            <View style={[style.shadowprop, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="arrow-alt-circle-right"
                    color="#1e90ff"
                  size={40}
                />
            </View>
        );
    }
}

class HomeButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, this.props.style]}>
                <Icon2
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
                <Icon2
                    onPress={this.props.action}
                    name="user"
                    color="#eee"
                    size={defaultIconSize}
                // onPress={() =>
                // }
                />
            </View>
        );
    }
}

export { HomeButton, ProfileButton, RightButton };
