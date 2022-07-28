import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import { LeftButton } from "./buttons";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

///////////////////////////////////////////////////////////////////////////////
//                          Import react components                          //
///////////////////////////////////////////////////////////////////////////////

import Footer from "./footer";
import style from "./style/main";
import accordionStyle from "./style/accordionStyle";

export default class DepartmentSelectionScreen extends Component {

  constructor(props) {
    super(props);

    ////////////////////////////////////////////////////////////////////////////
    // TODO: The profile information is hard coded. Refactor to store locally //
    ////////////////////////////////////////////////////////////////////////////

    this.state = {
      departments: {
        radiology: ["X-Ray", "Ultrasound", "MRI"],
        surgery: ["Dental", "Gastrointestinal", "Cardiovascular", "Neurosurgery", "Ophthalmology"],
      },

    };
  };

  render() {
    return (
      <>
        <View style={style.main.center_container}>
          <Text style={{ "fontSize": 30, "color": "#EEE" }}>Choose Department</Text>
          <Collapse style={{width: 300}}> {/* The style is a placeholder */}
            <CollapseHeader style={accordionStyle.base}>
              <View>
                <Text>Radiology</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* Map the department fields into the list of items*/}
              {this.state.departments.radiology.map((item) => (
                <Text>{item}</Text>
              ))}
            </CollapseBody>
          </Collapse>
          <Collapse style={{ width: 300 }}> {/* The style is a placeholder */}
            <CollapseHeader style={accordionStyle.base}>
              <View>
                <Text>Surgery</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {/* Map the department fields into the list of items*/}
              {this.state.departments.surgery.map((item) => (
                <Text>{item}</Text>
              ))}
            </CollapseBody>
          </Collapse>
        </View>
        <Footer>
          <LeftButton navigation={this.props.navigation} style={{ visibility: false }} />
        </Footer>
      </>
    );
  }
}
