import { SAFE_CONTENT_RELATIVE_PATH_REGEX } from '~/constants/regex';
import { useDocumentService } from '~/server/services/document';
import type { DocumentRequestDTO } from '~/types/dtos';

export default defineEventHandler(async (event) => {
  const query = getQuery<DocumentRequestDTO>(event);
  if (!query.contentRelativePath?.match(SAFE_CONTENT_RELATIVE_PATH_REGEX))
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });

  const fileName = query.contentRelativePath.split('/').pop()!.split('.')[0] + '.pdf';

  setResponseHeaders(event, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename=${fileName}`,
  });

  const { getDocument } = useDocumentService();
  return await getDocument(query).catch((e) => {
    console.log(e);
    throw createError({
      statusCode: 404,
      statusMessage: String(e),
    });
  });
});
