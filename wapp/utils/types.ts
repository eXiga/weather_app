export const TEMPERATURE_METRIC = ["Celsius", "Fahrenheit"] as const;
export type TemperatureMetric = typeof TEMPERATURE_METRIC[number];

export const MEASURMENTS_SYSTEM = ["Metric", "Imperial"] as const;
export type MeasurementsSystem = typeof MEASURMENTS_SYSTEM[number];
