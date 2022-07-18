import { StyleSheet, Text, View, Image } from 'react-native';
import shadowProp from './shadowprop';

// window.alert(JSON.stringify( shadowProp ));

const header = StyleSheet.create({
    container: {
        // display: "flex",
        // flexDirection: 'row',
        // alignItems: 'flex-end',
        // flexStart: 'left',
        // justifyContent: "flex-start",
        // paddingTop: "10%",
        height: 200,
        backgroundColor: '#00bfff',
    },
    shadowProp: shadowProp(1.5)
});

export default header;
