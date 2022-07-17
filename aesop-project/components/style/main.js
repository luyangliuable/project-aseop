import { StyleSheet, Dimensions, View, Image } from 'react-native';

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
        width: '50%',
        height: "20%",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});


const imageStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: '85%',
        height: Dimensions.get('window').width*0.8,
        resizeMode: 'stretch',
    },
});


export default {main, nameContainer, imageStyles};
