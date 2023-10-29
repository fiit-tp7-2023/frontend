import { ofetch, type FetchOptions } from 'ofetch';

const RUNTIME_CONFIG = useRuntimeConfig();

const apiFetch = ofetch.create({
  baseURL: RUNTIME_CONFIG.restApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = async <T>(path: string, token: string, options?: FetchOptions<'json'>) =>
  await apiFetch<T>(path, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
