import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useTheme from "@hooks/useTheme";
import { TabBarIcon } from "@components";

import SettingsScreen from "./Settings/_layout";
import FavoritesScreen from "./Favorites/Favorites";
import HomeScreen from "./Home/Home";

const Tab = createBottomTabNavigator();

interface RootTabBarProps {
  onLayout: () => void;
}

export default function AppLayout(props: RootTabBarProps) {
  const theme = useTheme();

  return (
    <NavigationContainer onReady={props.onLayout}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarIcon
                route={route.name}
                focused={focused}
                size={size}
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.secondary}
              />
            );
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.backgroundColor,
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
