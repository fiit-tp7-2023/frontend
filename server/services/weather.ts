import { WeatherForecast } from "~/types/weather";
import { useApi } from "../utils/api";

export const useWeatherService = (token: string) => {
  const getForecasts = async () => {
    const data = await useApi<WeatherForecast[]>("/WeatherForecast", token);
    return data;
  };

  return {
    getForecasts,
  };
};
