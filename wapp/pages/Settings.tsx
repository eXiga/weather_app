import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Theme from "../design/Design";
import { useNavigation } from "@react-navigation/native";
import { SettingsButton } from "../components";

type SettingsScreens = {
  Main: undefined;
};

type StackScreenNavigationProp = StackNavigationProp<SettingsScreens>;

const SettingsStack = createStackNavigator<SettingsScreens>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
});

function MainSettings() {
  const navigation = useNavigation<StackScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        <SettingsButton
          title="City"
          value="undefined"
          onPress={() => console.log("CITY")}
        />
        <SettingsButton
          title="Temperature"
          value="Fahrenheit"
          onPress={() => console.log("TEMP")}
        />
        <SettingsButton
          title="Measurements"
          value="Imperial"
          onPress={() => console.log("METRIC")}
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
        component={MainSettings}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
}

/// https://open-meteo.com/
