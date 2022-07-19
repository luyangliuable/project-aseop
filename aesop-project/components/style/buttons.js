import { StyleSheet, Dimensions } from 'react-native';

const buttonstyle = StyleSheet.create({
    base: {},
    hide: {
        display: "none",
    },
    floatleft: {
        visibility: "hidden"
    },
    floatmiddle: {
        marginRight: Dimensions.get('window').width / 5,
        marginLeft: Dimensions.get('window').width / 5,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50
    },
    floatright: {
        marginLeft: "auto",
    }
});

export default buttonstyle;
