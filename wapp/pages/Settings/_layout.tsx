import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";

import TemperatureScreen from "./Temperature";
import MeasurementsScreen from "./Measurements";
import MainScreen from "./Main";

type SettingsScreens = {
  Main: undefined;
  Temperature: undefined;
  Measurements: undefined;
};

export type StackScreenNavigationProp = StackNavigationProp<SettingsScreens>;

const SettingsStack = createStackNavigator<SettingsScreens>();

export default function SettingsScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="Temperature"
        component={TemperatureScreen}
        options={childScreenNavigationOptions}
      />
      <SettingsStack.Screen
        name="Measurements"
        component={MeasurementsScreen}
        options={childScreenNavigationOptions}
      />
    </SettingsStack.Navigator>
  );
}

const childScreenNavigationOptions: StackNavigationOptions = {
  presentation: "modal",
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "#fffffb",
  },
  headerTintColor: "#000000",
  headerTitleStyle: {
    fontFamily: "Montserrat-Light",
    fontWeight: "300",
    fontSize: 15,
  },
};
