import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { RootTabBar } from "@components";
import { SettingsScreen, FavoritesScreen, HomeScreen } from "@pages";

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
