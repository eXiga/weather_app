import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Theme from "../design/Design";
import TabBarIcon from "./TabBarIcon";

const Tab = createBottomTabNavigator();
interface RootTabBarProps {
  pages: [string, () => JSX.Element][];
}

export default function RootTabBar(props: RootTabBarProps) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarIcon
                route={route.name}
                focused={focused}
                size={size}
                activeColor={Theme.primary}
                inactiveColor={Theme.secondary}
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
        {props.pages.map((page) => {
          return <Tab.Screen key={page[0]} name={page[0]} children={page[1]} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
