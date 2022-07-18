import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/home";

const Stack = createNativeStackNavigator();

Stack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    let routeName = navigation.state.routes[navigation.state.index].routeName;
    if (routeName == 'Home') {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

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
            <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


