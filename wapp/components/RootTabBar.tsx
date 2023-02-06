import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useTheme from "@hooks/useTheme";
import TabBarIcon from "./TabBarIcon";

const Tab = createBottomTabNavigator();
interface RootTabBarProps {
  pages: [string, () => JSX.Element][];
  onLayout: () => void;
}

export default function RootTabBar(props: RootTabBarProps) {
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
        {props.pages.map((page) => {
          return <Tab.Screen key={page[0]} name={page[0]} children={page[1]} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
