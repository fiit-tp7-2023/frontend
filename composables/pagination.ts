import { useResizeObserver } from '@vueuse/core';
import { NDataTable } from 'naive-ui';
import type { PaginationRequestDTO, PaginationResponseDTO } from '~/types/dtos';
import { parsePaginationQueryParam } from '~/utils/pagination';

export const usePagination = <T extends PaginationResponseDTO>(
  tableRef: Ref<InstanceType<typeof NDataTable> | undefined>,
) => {
  const router = useRouter();
  const route = useRoute();

  const pageCount = ref(1);
  const pageSizes = [5, 10, 15, 20];

  const parsedPageNumber = parsePaginationQueryParam(route.query.pageNumber as string, 1);
  const parsedPageSize = parsePaginationQueryParam(route.query.pageSize as string, 10);

  const query = ref<PaginationRequestDTO>({
    pageNumber: parsedPageNumber,
    pageSize: pageSizes.includes(parsedPageSize) ? parsedPageSize : 10,
  });

  const pushQueryToUrl = <QueryT extends PaginationRequestDTO>(query: QueryT) => {
    router.push({
      query: {
        ...route.query,
        ...query,
      },
    });
  };

  const handlePageChange = (pageNumber: number) => {
    query.value.pageNumber = pagination.page = pageNumber;
  };

  const handlePageSizeChange = (pageSize: number) => {
    query.value.pageSize = pagination.pageSize = pageSize;
  };

  const updatePageCount = (data: T | null, adjustPageNumber = true) => {
    pageCount.value = data?.pageCount || 1;
    if (adjustPageNumber && query.value.pageNumber > pageCount.value)
      query.value.pageNumber = pagination.page = pageCount.value;
  };

  const resetPageNumber = () => {
    query.value.pageNumber = pagination.page = 1;
  };

  const pagination = reactive({
    page: query.value.pageNumber,
    pageSize: query.value.pageSize,
    showSizePicker: true,
    pageSizes,
    pageCount,
    onChange: handlePageChange,
    onUpdatePageSize: handlePageSizeChange,
    simple: false,
  });

  if (tableRef.value) {
    useResizeObserver(tableRef, (entries) => {
      pagination.simple = entries[0].contentRect.width <= 530;
    });
  }

  return {
    pushQueryToUrl,
    resetPageNumber,
    updatePageCount,
    pagination,
    query,
  };
};
