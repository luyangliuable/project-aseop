import { StyleSheet, Dimensions } from 'react-native';

const profileStyle = StyleSheet.create({
    profilePicture: {
        width: 120,
        height: 120,
        backgroundColor: "#888",
        borderRadius: 120,
        alignItems: "center",
        top: -40,
    },

    profileDetails: {
        color: "white",
        width: 120,
        background: "black",
        alignItems: "center",
        top: 200,
        width: 320,
        height: 400,
    }
});

export default profileStyle;
