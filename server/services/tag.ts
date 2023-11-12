import { useApi } from '../utils/api';
import { TagSearchRequestDTO, TagSearchResponseDTO } from '~/types/dtos';

export const useTagService = (token: string) => {
  const searchTags = async (query: TagSearchRequestDTO) => await useApi<TagSearchResponseDTO>('tag', token, { query });

  return {
    searchTags,
  };
};
