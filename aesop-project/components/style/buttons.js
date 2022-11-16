import { StyleSheet, Dimensions } from 'react-native';

const buttonstyle = StyleSheet.create({
    base: {},
    floatleft: {
    },
    floatright: {
    },
    floatmiddle: {
        marginLeft: Dimensions.get('window').width / 5.1,
        marginRight: Dimensions.get('window').width / 5.1, // FIX: Middle button suddenly changes length on home screen
        width: 80,
        color: '#EEE',
        margin: 'auto',
        fontWeight: "bold",
        backgroundColor: 'white',
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
});

export default buttonstyle;
