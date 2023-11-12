import { useApi } from '../utils/api';
import { TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';

export const useTransactionService = (token: string) => {
  const getTransaction = async (id: string) => await useApi<TransactionDTO>(`/transaction/${id}`, token);

  const searchTransactions = async (query: TransactionSearchRequestDTO) =>
    await useApi<TransactionSearchResponseDTO>('transaction', token, { query });

  return {
    getTransaction,
    searchTransactions,
  };
};
