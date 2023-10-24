import { ofetch, type FetchOptions } from 'ofetch';
import { BASE_URL } from '../config/api';

const apiFetch = ofetch.create({
  baseURL: BASE_URL,
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
