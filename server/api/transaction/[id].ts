import { useTransactionService } from '~/server/services/transaction';
import { getToken } from '#auth';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if (!token)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const { getTransaction } = useTransactionService(token.googleAccessToken);
  const id = event.context.params!.id;
  return await getTransaction(id);
});
