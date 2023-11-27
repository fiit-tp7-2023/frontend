import type { PaginationRequestDTO, PaginationResponseDTO } from '.';

export interface TagRelationDTO {
  type: string;
  value: number;
}

export interface TagSearchRequestDTO extends PaginationRequestDTO {
  name?: string;
}

export interface TagSearchResponseDTO extends PaginationResponseDTO {
  tags: string[];
}
