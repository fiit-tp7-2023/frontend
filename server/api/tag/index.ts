import { useTagService } from '~/server/services/tag';
import { getToken } from '#auth';
import { TagSearchRequestDTO } from '~/types/dtos';

export default defineEventHandler(async (event) => {
  const token = await getToken({ event });
  if (!token)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });

  const { searchTags } = useTagService(token.googleAccessToken);
  const query = getQuery<TagSearchRequestDTO>(event);
  return await searchTags(query);
});
