import { useWeatherService } from '../services/weather';
import { getToken } from '#auth';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if (!token)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const { getForecasts } = useWeatherService(token.googleAccessToken);
  return await getForecasts();
});
