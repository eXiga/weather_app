import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SettingsButtonProps {
  title: string;
  value: string;
  onPress: () => void;
}

export default function SettingsButton(props: SettingsButtonProps) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{props.value}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat-Light",
    fontWeight: "300",
    fontSize: 15,
  },
  value: {
    fontFamily: "Montserrat-Thin",
    fontWeight: "400",
    fontSize: 13,
  },
});
