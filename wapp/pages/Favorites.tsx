import useTheme from "../hooks/useTheme";
import { Text, View, StyleSheet } from "react-native";
import WeatherPreview from "../components/WeatherPreview";

export default function FavoritesScreen() {
  const theme = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <WeatherPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
