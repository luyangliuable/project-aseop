import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeButton, ProfileButton } from "./components/buttons";
import HomeScreen from "./components/home";
import header from "./components/style/header";
import ProfileScreen from "./components/profile";
import { Component, useEffect } from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { Text, View, Image } from 'react-native';
// import { getDefaultHeaderHeight } from '@react-navigation/elements';


///////////////////////////////////////////////////////////////////////////////
//                Create instance of StackNativeStackNavigator               //
///////////////////////////////////////////////////////////////////////////////
const Stack = createNativeStackNavigator();


///////////////////////////////////////////////////////////////////////////////
//                              Component class                              //
///////////////////////////////////////////////////////////////////////////////
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

                  {/* TODO a lot of repeated code in here. Apply DRY principles*/}

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



