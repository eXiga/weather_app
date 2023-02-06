import { StyleSheet, View } from "react-native";

export default function WeatherPreview() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
