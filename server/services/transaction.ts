import { useApi } from '../utils/api';
import { TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';

export const useTransactionService = (token: string) => {
  const getTransaction = async (id: string) => {
    return await useApi<TransactionDTO>(`/transaction/${id}`, token);
  };

  const searchTransactions = async (query: TransactionSearchRequestDTO) => {
    return await useApi<TransactionSearchResponseDTO>('transaction/search', token, { query });
  };

  return {
    getTransaction,
    searchTransactions,
  };
};
