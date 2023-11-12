import { useNFTService } from '~/server/services/nft';
import { getToken } from '#auth';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if (!token)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const { getNFT } = useNFTService(token.googleAccessToken);
  const id = getRouterParam(event, 'id') as string;
  return await getNFT(id);
});
