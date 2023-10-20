import { getToken } from "#auth";
import { WeatherForecast } from "~/types/weather";
import { BASE_URL } from "../config/api";

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if(!token) throw createError({
    statusCode: 401,
    statusMessage: "Unauthorized",
  });
    const data = await $fetch<WeatherForecast[]>(`${BASE_URL}/WeatherForecast`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.googleAccessToken,
    },
  });
  return data
})
