import { useApi } from '../utils/api';
import { TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';

export const useTransactionService = (token: string) => {
  const getTransaction = async (id: string) => {
    const data = await useApi<TransactionDTO>(`/transaction/${id}`, token);
    return data;
  };

  const searchTransactions = async (query: TransactionSearchRequestDTO) => {
    const data = await useApi<TransactionSearchResponseDTO>('transaction/search', token, { query });
    return data;
  };

  return {
    getTransaction,
    searchTransactions,
  };
};
