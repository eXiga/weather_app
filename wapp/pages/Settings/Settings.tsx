import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";

import useTheme from "@hooks/useTheme";
import { SettingsButton } from "@components";
import { temperatureMetricAtom, measurmentsSystemAtom } from "@atoms";
import TemperatureScreen from "./Temperature";
import MeasurementsScreen from "./Measurements";

type SettingsScreens = {
  Main: undefined;
  Temperature: undefined;
  Measurements: undefined;
};

type StackScreenNavigationProp = StackNavigationProp<SettingsScreens>;

const SettingsStack = createStackNavigator<SettingsScreens>();

function MainScreen() {
  const theme = useTheme();
  const navigation = useNavigation<StackScreenNavigationProp>();
  const temperatureMetrics = useAtomValue(temperatureMetricAtom);
  const measurementsSystem = useAtomValue(measurmentsSystemAtom);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}
    >
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        <SettingsButton
          title="City"
          value="undefined"
          shouldShowNavigationImage={true}
          onPress={() => console.log("CITY")}
        />
        <SettingsButton
          title="Temperature"
          value={temperatureMetrics}
          shouldShowNavigationImage={true}
          onPress={() => navigation.navigate("Temperature")}
        />
        <SettingsButton
          title="Measurements"
          value={measurementsSystem}
          shouldShowNavigationImage={true}
          onPress={() => navigation.navigate("Measurements")}
        />
      </View>
    </SafeAreaView>
  );
}

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

/// https://open-meteo.com/
