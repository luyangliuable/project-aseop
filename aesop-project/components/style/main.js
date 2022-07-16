import { StyleSheet, Text, View, Image } from 'react-native';

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const nameContainer = StyleSheet.create({
    container: {
        backgroundColor: '#8ED8F3',
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 220,
    },
});


const imageStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 220,
        height: 200,
        resizeMode: 'stretch',
    },
});


export default {main, nameContainer, imageStyles};
