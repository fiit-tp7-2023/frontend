import { mdToPdf } from 'md-to-pdf';
import type { DocumentRequestDTO } from '~/types/dtos';

export const useDocumentService = () => {
  const getDocument = async (query: DocumentRequestDTO) => {
    const pdf = await mdToPdf({ path: `content/${query.contentRelativePath}` });
    return new Blob([pdf.content]);
  };

  return {
    getDocument,
  };
};
