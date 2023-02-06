import { View, SafeAreaView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSetAtom } from "jotai";

import { SettingsButton } from "@components";
import { TEMPERATURE_METRIC } from "@utils/types";
import { temperatureMetricAtom } from "@atoms";
import useTheme from "@hooks/useTheme";

export default function TemperatureScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const setTemperatureMetrics = useSetAtom(temperatureMetricAtom);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}
    >
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        {TEMPERATURE_METRIC.map((metric) => (
          <SettingsButton
            key={metric}
            title={metric}
            value=""
            shouldShowNavigationImage={false}
            onPress={() => {
              setTemperatureMetrics(metric);
              navigation.goBack();
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
