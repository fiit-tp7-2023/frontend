import { mdToPdf } from 'md-to-pdf';
import type { DocumentRequestDTO } from '~/types/dtos';

export const useDocumentService = () => {
  const getDocument = async (query: DocumentRequestDTO) => {
    const pdf = await mdToPdf(
      { path: `${process.cwd()}/content/${query.contentRelativePath}` },
      { launch_options: { headless: 'new', args: ['--no-sandbox'] }, basedir: 'public' },
    );
    return new Blob([pdf.content]);
  };

  return {
    getDocument,
  };
};
