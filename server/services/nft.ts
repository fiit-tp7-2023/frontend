import { useApi } from '../utils/api';
import { NFTDTO } from '~/types/dtos';

export const useNFTService = (token: string) => {
  const getNFT = async (id: string) => await useApi<NFTDTO>(`/nft/${id}`, token);

  return {
    getNFT,
  };
};
