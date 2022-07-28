import React from 'react';
import { Component, useEffect } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

///////////////////////////////////////////////////////////////////////////////
//                               Import styling                              //
///////////////////////////////////////////////////////////////////////////////i
import shadowProp from "./style/shadowprop";
import buttonstyle from "./style/buttons";

const buttonConfig = {
    defaultIconSize: 35,
    color: "#FFF",
};


class Button extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <TouchableNativeFeedback >
        <View style={[shadowProp(1.2), buttonstyle.base, this.props.style]}>
          <Text>{ this.props.children }</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////
//                           Start button component                          //
///////////////////////////////////////////////////////////////////////////////

class StartButton extends Component {
    constructor(props) {
        super(props);
        // window.alert(this.props.navigation);
    };

    render() {
        return (
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("Departments")}>
                <View style={[shadowProp(1.2), buttonstyle.floatmiddle, this.props.style]}>
                    <Text>START</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////
//                           Left Button component                           //
///////////////////////////////////////////////////////////////////////////////

class LeftButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[shadowProp, buttonstyle.floatleft, buttonstyle.hidden, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="arrow-alt-circle-left"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                />
            </View>
        );
    }
}

class RightButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View
                style={[shadowProp, buttonstyle.floatright, this.props.style]}
            >
                <Icon2
                    onPress={this.props.action}
                    name="arrow-alt-circle-right"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                />
            </View>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////
//                           Home Button Component                           //
///////////////////////////////////////////////////////////////////////////////
class HomeButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[shadowProp, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="home"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                />
            </View>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////
//                          Profile Button Component                         //
///////////////////////////////////////////////////////////////////////////////
class ProfileButton extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[shadowProp, this.props.style]}>
                <Icon2
                    onPress={this.props.action}
                    name="user-alt"
                    color={buttonConfig.color}
                    size={buttonConfig.defaultIconSize}
                // onPress={() =>
                // }
                />
            </View>
        );
    }
}

// Export the buttons from this file
export { Button, HomeButton, ProfileButton, RightButton, LeftButton, StartButton };
