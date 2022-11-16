import { StyleSheet, View, Text } from 'react-native';
import style from "./style/main.js";
import { Button, RightButton, LeftButton, StartButton, Separator, ListItem } from "./buttons";
import { Component, useContext, useEffect } from 'react';
import Footer from "./footer";

///////////////////////////////////////////////////////////////////////////////
//                                Import syles                               //
///////////////////////////////////////////////////////////////////////////////
import main from "./style/main.js";
import profileStyle from "./style/profileStyle.js";


///////////////////////////////////////////////////////////////////////////////
//                             Profile Component                             //
///////////////////////////////////////////////////////////////////////////////
export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile_size: 120,
            details: {
                name: "Mike",
                Age: 7,
                'Favourite Icecream': 'Chocolate',
                'Health Concerns': [],
                'Sensory Sensitivities': ['Loud noises'],
                'Behaviour Triggers': ['Multitasking']
            }
        };
    }

    render() {
        return (
            <>
              <View style={main.main.outer_container}>
                <View style={style.main.center_container}>
                  <View style={profileStyle.profilePicture}>
                  </View>

                  {/* TODO: User's name is hardcoded */}
                  {/* <Text style={{ color: "#EEE", fontSize: 30 }}>This is Mike's profile</Text> */}
                  <View style={{display: 'flex', width: '100%', background: "#00bfff", height: 50, alignItems: "center", justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    <Button>Edit Profile</Button>
                    <Button>Customize Avator</Button>
                  </View>
                </View>

                <View style={profileStyle.profileDetails}>
                  {
                      Object.keys( this.state.details ).map((val, idx) => (
                          <Text style={{color: 'white'}}><Text style={{fontWeight: 'bold'}}>{ val }</Text>: {this.state.details[val]}</Text>
                      ))
                  }
                </View>


              <View>
                <Button>Story Settings</Button>
              </View>

              </View>


              <Footer>
                <LeftButton />
              </Footer>
            </>
        );
    }
};
