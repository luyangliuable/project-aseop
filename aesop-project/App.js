import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { HomeButton, ProfileButton } from "./components/buttons";
import HomeScreen from "./components/home";
import header from "./components/style/header";

const Stack = createNativeStackNavigator();

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
        // this.headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
    };

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Home" component={HomeScreen}
                        options={{
                            title: 'My home',
                            headerStyle: [header.container, header.shadowProp],
                            headerTintColor: '#FFF',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerLeft: () => (
                                <HomeButton
                                    onPress={() => alert('Clicked !!')}
                                    title="menu"
                                    color="#000"
                                />
                            ),
                            headerRight: () => (
                                <ProfileButton
                                    onPress={() => alert('Clicked !!')}
                                    title="menu"
                                    color="#1E90FF"
                                />
                            ),
                        }}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen}
                        options={{
                            title: 'My profile',
                            headerStyle: [header.container, header.shadowProp],
                            headerTintColor: '#FFF',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerRight: () => (
                                <ProfileButton
                                  style={[buttonstyle.floatright, buttonstyle.base]}
                                  navigation={this.props.navigation}
                                />
                            ),

                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};


