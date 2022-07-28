import { Dimensions, View, Text } from 'react-native';
import style from "./style/main.js";
import { RightButton, LeftButton, StartButton, Separator, ListItem } from "./buttons";
import { Component, useContext, useEffect } from 'react';
import Footer from "./footer";

///////////////////////////////////////////////////////////////////////////////
//                                Import syles                               //
///////////////////////////////////////////////////////////////////////////////
import main from "./style/main.js";
import { Button } from "./buttons";


///////////////////////////////////////////////////////////////////////////////
//                             Profile Component                             //
///////////////////////////////////////////////////////////////////////////////
export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    // window.alert(JSON.stringify( main.main.outer_container ));
    this.state = {
      profile_size: 120,
    };
  }

  render() {
    return (
      <>
        <View style={main.main.outer_container}>
          <View style={{ width: this.state.profile_size, height: this.state.profile_size, backgroundColor: "#888", borderRadius: this.state.profile_size, alignItems: "center" }}>
          </View>
          <View style={{ width: Dimensions.get('window').width / 1.2, height: 100, marginTop: 5, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Button>Edit Profile</Button>
            <Button>Avatar Remix</Button>
          </View>
          <View style={style.main.center_container}>
            {/* TODO: User's name is hardcoded */}
            <Text style={{ color: "#EEE", fontSize: 30 }}>This is Mike's profile</Text>
          </View>
        </View>

        <Footer>
          <LeftButton />
        </Footer>
      </>
    );
  }
};
