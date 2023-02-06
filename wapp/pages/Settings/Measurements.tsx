import { View, SafeAreaView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSetAtom } from "jotai";

import { SettingsButton } from "@components";
import { MEASURMENTS_SYSTEM } from "@utils/types";
import { measurmentsSystemAtom } from "@atoms";
import useTheme from "@hooks/useTheme";

export default function MeasurementsScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const setMeasurementsSystem = useSetAtom(measurmentsSystemAtom);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}
    >
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        {MEASURMENTS_SYSTEM.map((system) => (
          <SettingsButton
            key={system}
            title={system}
            value=""
            shouldShowNavigationImage={false}
            onPress={() => {
              setMeasurementsSystem(system);
              navigation.goBack();
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
