import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../pages/Home";
import FavoritesScreen from "../pages/Favorites";
import SettingsScreen from "../pages/Settings";
import Theme from "../design/Design";

type IconName = keyof typeof AntDesign.glyphMap;

const Tab = createBottomTabNavigator();

function tabBarIcon(route: string): IconName {
  let iconName: IconName;
  if (route === "Home") {
    iconName = "home";
  } else if (route === "Settings") {
    iconName = "swap";
  } else if (route === "Favorites") {
    iconName = "hearto";
  } else {
    iconName = "meh";
  }

  return iconName;
}

export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            return (
              <AntDesign
                name={tabBarIcon(route.name)}
                size={size}
                color={focused ? Theme.primary : Theme.secondary}
              />
            );
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Theme.backgroundColor,
            borderTopWidth: 0,
            position: "absolute",
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
