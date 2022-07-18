import { StyleSheet, Text, View, Image } from 'react-native';
import shadowProp from './shadowprop';

// window.alert(JSON.stringify( shadowProp ));

const header = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'flex-end',
        // flexStart: 'left',
        // justifyContent: "flex-start",
        position: "absolute",
        top:0,
        left:0,
        width: "100%",
        height: 120,
        paddingTop: "10%",
        backgroundColor: '#1e90ff',
    },
    shadowProp: shadowProp(1.5)
});

export default header;
