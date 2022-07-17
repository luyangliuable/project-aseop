import { StyleSheet, Text, View, Image } from 'react-native';

const shadowProp = (radius) => StyleSheet.create({
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: radius,
});

export default shadowProp;
