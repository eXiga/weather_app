import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { TemperatureMetric, MeasurementsSystem } from "utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage<any>(() => AsyncStorage);

export const temperatureMetricAtom = atomWithStorage<TemperatureMetric>(
  "temperature",
  "Celsius",
  storage
);

export const measurmentsSystemAtom = atomWithStorage<MeasurementsSystem>(
  "measurements",
  "Metric",
  storage
);
