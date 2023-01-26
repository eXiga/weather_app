import { useCallback } from "react";
import { RootTabBar } from "./components";
import HomeScreen from "./pages/Home";
import FavoritesScreen from "./pages/Favorites";
import SettingsScreen from "./pages/Settings";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootTabBar
      onLayout={onLayoutRootView}
      pages={[
        ["Home", HomeScreen],
        ["Favorites", FavoritesScreen],
        ["Settings", SettingsScreen],
      ]}
    />
  );
}
