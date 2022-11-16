import { StyleSheet, Dimensions } from 'react-native';

const buttonStyle = StyleSheet.create({
    base: {},
    hidden: {},
    floatLeft: {
        flex: 1,
        alignItems: "flex-start",
        width: Dimensions.get('window').width / 2.8
    },
    floatRight: {
        flex: 3,
        display: "flex",
        alignItems: "flex-end",
        width: Dimensions.get('window').width / 3
    },
    floatmiddle: {
        flex: 2,
        width: Dimensions.get('window').width / 2.8,
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

export default buttonStyle;
