import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeButton, ProfileButton } from "./components/buttons";
import HomeScreen from "./components/home";
import header from "./components/style/header";
import ProfileScreen from "./components/profile";
import DepartmentSelectionScreen from "./components/departments";
import { Component, useEffect } from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { Text, View, Image } from 'react-native';
// import { getDefaultHeaderHeight } from '@react-navigation/elements';

///////////////////////////////////////////////////////////////////////////////
//                Create instance of StackNativeStackNavigator               //
///////////////////////////////////////////////////////////////////////////////
const Stack = createNativeStackNavigator();

///////////////////////////////////////////////////////////////////////////////
//    Header, this is not an react component but configuration for header    //
///////////////////////////////////////////////////////////////////////////////
const headerOptions = (navigation) => {
    return {
        title: '',
        headerStyle: [header.container, header.shadowProp],
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: (props) => {
            // window.alert(JSON.stringify(props));
            return (
                <HomeButton
                /* {...props} */
                  action={() => navigation.navigate("Home")}
                  title="menu"
                  color="#000"
                />
            );
        },
        headerRight: () => (
            <ProfileButton
              action={() => navigation.navigate("Profile")}
              title="menu"
              color="#1E90FF"
            />
        ),
    };
}

///////////////////////////////////////////////////////////////////////////////
//                              Component class                              //
///////////////////////////////////////////////////////////////////////////////

export default class App extends Component {
    constructor(props) {
        /**
         * App component
         * @param  {Object} props  Properties of App.
         * @return {Void}
         */
        super(props);

        ////////////////////////////////////////////////////////////////////////////////
        // TODO: Right now the profile information is hard coded for testing purposes //
        ////////////////////////////////////////////////////////////////////////////////

        this.state = {
            profile: {
                firstname: "Mike",
                lastname: "Bob",
                age: "5",
                dob: "12-12-2018",
            },
        };
    };

    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator >
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
            /* This uses a callback for the options prop to access navigation and route objects. */
                  options={({ navigation, route }) => (headerOptions(navigation))}
                />

                {/* Screen for Profile */}

                <Stack.Screen name="Profile" component={ProfileScreen}
            /* This uses a callback for the options prop to access navigation and route objects. */
                              options={({ navigation, route }) => (headerOptions(navigation))}
                />


                {/* Screen for Departments */}
                <Stack.Screen name="Departments" component={DepartmentSelectionScreen}
            /* This uses a callback for the options prop to access navigation and route objects. */
                              options={({ navigation, route }) => (headerOptions(navigation))}
                />
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
