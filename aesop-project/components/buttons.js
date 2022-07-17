import React from 'react';
import { Component, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class HomeButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[ button.shadowprop ]}>
                <Icon
                    name="home"
                    color="#eee"
                    size={50}
                />
            </View>
        );
    }
}

const button = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    container: {
        cursor: "pointer"
    }
});


export default HomeButton;
