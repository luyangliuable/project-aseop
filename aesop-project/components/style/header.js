import { StyleSheet, Text, View, Image } from 'react-native';
import shadowProp from './shadowprop';

// window.alert(JSON.stringify( shadowProp ));

const header = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#00bfff',
    },
    shadowProp: shadowProp(1.5)
});

export default header;
