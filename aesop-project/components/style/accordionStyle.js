import { StyleSheet, Dimensions } from 'react-native';

const accordionStyle = StyleSheet.create({
    base: {
        backgroundColor: "#EEE",
        alignItems: "center",
        borderBottomWidth: 0.8,
        borderBottomColor: "black",
        padding: 10,
    },
    children: {
        backgroundColor: "#DDD",
        width: "100%",
        borderBottomWidth: 0.5,
        borderBottomColor: "black",
        textAlign: "center",
        padding: 2,
        color: "#555"
    }
});

export default accordionStyle;
