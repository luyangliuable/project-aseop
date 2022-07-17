import { StyleSheet, Text, View, Image } from 'react-native';

const header = StyleSheet.create({
    container: {
        display: "flex",
        // flexStart: 'left',
        paddingTop: "10%",
        justifyContent: "flex-start",
        position: "absolute",
        top:0,
        left:0,
        width: "100%",
        height:90,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        flexDirection: 'row'
    },
});

export default header;
