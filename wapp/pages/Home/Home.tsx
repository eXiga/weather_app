import useTheme from "@hooks/useTheme";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}
