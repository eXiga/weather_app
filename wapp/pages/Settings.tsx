import { Text, View } from "react-native";
import Theme from "../Design";

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.backgroundColor,
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}
