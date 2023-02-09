import { useQuery } from "react-query";

import { ICity } from "./models";

interface ICitySearchRequestParams {
  name: string;
}

interface ICitySearchRequestError {
  error: boolean;
  reason: string;
}

interface ICitySearchResponse {
  results: ICity[];
  generationtime_ms: number;
}

const baseUrl = "https://geocoding-api.open-meteo.com/v1/search?name=";

export const fetchCityByName = async (name: string) => {
  const response = await fetch(baseUrl + name);
  const json = await response.json();
  if (!response.ok) {
    const error: ICitySearchRequestError = json;
    throw new Error(error.reason);
  }

  const searchResult: ICity[] = (json as ICitySearchResponse).results;
  return searchResult;
};

export default function useCitySearchQuery(params: ICitySearchRequestParams) {
  return useQuery<ICity[], Error>({
    queryKey: ["city", params.name],
    queryFn: () => fetchCityByName(params.name),
  });
}
