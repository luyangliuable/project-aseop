import { StyleSheet, Dimensions } from 'react-native';

const header = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        paddingLeft: Dimensions.get('window').width/22,
        paddingRight: Dimensions.get('window').width/22,
        top: "87%",
        left: 0,
        width: "100%",
        height: "13%",
        backgroundColor: '#00bfff',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
});

export default header;
