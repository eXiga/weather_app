import { Pressable, StyleSheet } from "react-native";

export default function SettingsButton() {
  return <Pressable style={styles.button}></Pressable>;
}

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: "100%",
    backgroundColor: "red",
    borderColor: "black",
    marginTop: 1,
  },
});
