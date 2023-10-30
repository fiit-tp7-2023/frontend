import { useTransactionService } from '~/server/services/transaction';
import { getToken } from '#auth';
import { TransactionSearchRequestDTO } from '~/types/dtos';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if (!token)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const { searchTransactions } = useTransactionService(token.googleAccessToken);
  const query = getQuery<TransactionSearchRequestDTO>(event);
  return await searchTransactions(query);
});
