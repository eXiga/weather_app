import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import useTheme from "@hooks/useTheme";
import useCitySearchQuery, { fetchCityByName } from "../../api/citySearchQuery";
import { ICity } from "../../api/models";

type ItemProps = { name: string; country: string };

const Item = ({ name, country }: ItemProps) => (
  <View style={{ marginVertical: 8 }}>
    <Text>{name}</Text>
    <Text>{country}</Text>
  </View>
);

export default function FavoritesScreen() {
  const theme = useTheme();
  const { isLoading, data } = useCitySearchQuery({
    name: "Krakow",
  });

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.backgroundColor }}
    >
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }: { item: ICity }) => (
              <Item name={item.name} country={item.country} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
