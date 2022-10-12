import { Text, View } from "react-native";
import Theme from "../Design";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.backgroundColor,
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}
