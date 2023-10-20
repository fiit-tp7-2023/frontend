import { WeatherForecast } from "~/types/weather";
import { BASE_URL } from "../config/api";

export const useWeatherService = (token: string) => {

    const getForecasts = async () => {
        const data = await $fetch<WeatherForecast[]>(
          `${BASE_URL}/WeatherForecast`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        return data;
    }

    return {
        getForecasts,
    }
}