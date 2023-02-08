import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";

import useTheme from "@hooks/useTheme";
import { SettingsButton } from "@components";
import { temperatureMetricAtom, measurmentsSystemAtom } from "@atoms";

import { StackScreenNavigationProp } from "./_layout";

export default function MainScreen() {
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
