import { ofetch, type FetchOptions, FetchError } from 'ofetch';
import { ServerError } from '../errors';

const RUNTIME_CONFIG = useRuntimeConfig();

const apiFetch = ofetch.create({
  baseURL: RUNTIME_CONFIG.restApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = async <T>(path: string, token: string, options?: FetchOptions<'json'>) => {
  try {
    return await apiFetch<T>(path, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof FetchError) {
      if (error.statusCode) {
        throw ServerError.fromCode(error.statusCode, error.message);
      } else {
        throw ServerError.unavailable();
      }
    } else {
      // This is a generic error, we don't know what happened.

      // eslint-disable-next-line no-console
      console.error(error);
      throw ServerError.internalServerError('Something went wrong');
    }
  }
};
