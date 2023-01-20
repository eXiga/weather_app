import { RootTabBar } from "./components";
import HomeScreen from "./pages/Home";
import FavoritesScreen from "./pages/Favorites";
import SettingsScreen from "./pages/Settings";

export default function App() {
  return (
    <RootTabBar
      pages={[
        ["Home", HomeScreen],
        ["Favorites", FavoritesScreen],
        ["Settings", SettingsScreen],
      ]}
    />
  );
}
