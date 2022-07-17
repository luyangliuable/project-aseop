import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import style from "./style/footer.js";

export default class App extends Component {

    constructor(props) {
        super(props);
        // window.alert(JSON.stringify(style));
    };

    render() {
        return (
            <>
                <View style={style.container}>
                    <Text>
                        {this.props.children}
                    </Text>
                </View>
            </>
        );
    }
}
