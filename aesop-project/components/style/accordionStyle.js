import { StyleSheet, Dimensions } from 'react-native';

const accordionStyle = StyleSheet.create({
  base: {
    backgroundColor: "#EEE",
    alignItems: "center",
    fontColor: "white",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: 'black',
    borderTopColor: 'black',
    padding: 10,
  },

  children: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    color: "white"
  }
});

export default accordionStyle;
