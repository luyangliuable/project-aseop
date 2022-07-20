import { StyleSheet, View, Text } from 'react-native';
import style from "./style/main.js";
import { RightButton, LeftButton, StartButton, Separator, ListItem } from "./buttons";
import { Component, useContext, useEffect } from 'react';
import Footer from "./footer";


///////////////////////////////////////////////////////////////////////////////
//                             Profile Component                             //
///////////////////////////////////////////////////////////////////////////////
export default class ProfileScreen extends Component {
    render() {
        return (
            <>
                <View style={style.main.center_container}>
                    {/* TODO: User's name is hardcoded */}
                    <Text style={{ color: "#EEE", fontSize: 30 }}>This is Mike's profile</Text>
                </View>

                <Footer>
                    <LeftButton />
                </Footer>
            </>
        );
    }
};

