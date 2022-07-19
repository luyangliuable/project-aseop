import { StyleSheet, Text, View, Image } from 'react-native';

const shadowProp = (radius) => StyleSheet.create({
    shadowColor: '#888',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: radius,
    // backgroundColor: "black",
});

export default shadowProp;
