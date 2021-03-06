import { StyleSheet, Dimensions } from 'react-native';

const buttonstyle = StyleSheet.create({
    base: {},
    floatleft: {
    },
    floatright: {
    },
    floatmiddle: {
        marginLeft: Dimensions.get('window').width / 5.1,
        marginRight: Dimensions.get('window').width / 5.1,
        width: 50,
        color: '#EEE',
        margin: 'auto',
        fontWeight: "bold",
        // borderWidth: 3,
        // borderStyle: 'solid',
        // borderColor: '#FFF',
        // backgroundColor: '#1E90FF',
        backgroundColor: 'white',
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35
    },
});

export default buttonstyle;
