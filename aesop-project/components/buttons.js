import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import style from "./style/shadowprop";
import buttonstyle from "./style/buttons";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const defaultIconSize = 30;


const buttonConfig = {
    defaultIconSize: 35,
    color: "#EEE",
}


class LeftButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, buttonstyle.base, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="arrow-alt-circle-left"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                />
            </View>
        );
    }
}

class RightButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[style.shadowprop, buttonstyle.floatright, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="arrow-alt-circle-right"
                    color={ buttonConfig.color }
                    size={buttonConfig.defaultIconSize}
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
                    onPress={this.props.action}
                    name="home"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
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
                    name="user-alt"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                // onPress={() =>
                // }
                />
            </View>
        );
    }
}

export { HomeButton, ProfileButton, RightButton, LeftButton };
