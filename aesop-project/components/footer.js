import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import style from "./style/footer.js";


///////////////////////////////////////////////////////////////////////////////
//                              Footer component                             //
///////////////////////////////////////////////////////////////////////////////

export default class App extends Component {
    constructor(props) {
        super(props);
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
