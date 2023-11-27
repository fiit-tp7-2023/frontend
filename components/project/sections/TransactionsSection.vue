<template>
  <n-card class="w-full" title="Transactions">
    <template #header-extra>
      <n-button text @click="refreshTransactions()">
        <Icon size="25" name="material-symbols:sync-rounded" />
      </n-button>
    </template>
    <n-space vertical>
      <n-input v-model:value="searchValues.senderId" type="text" placeholder="Sender ID" />
      <n-input v-model:value="searchValues.receiverId" type="text" placeholder="Receiver ID" />
      <n-input v-model:value="searchValues.nftId" type="text" placeholder="NFT ID" />
      <n-select
        v-model:value="searchValues.tagNames"
        filterable
        multiple
        remote
        clearable
        placeholder="Search NFT tags"
        :options="tagOptions"
        :loading="tagsLoading"
        :reset-menu-on-options-change="false"
        :clear-filter-after-select="false"
        :disabled="!!tagsError"
        @blur="handleTagsBlur"
        @search="handleTagsSearch"
        @scroll="handleTagsScroll"
      />
      <n-button type="primary" strong class="w-full" @click="handleTransactionsSearch()">Search</n-button>
      <n-data-table
        v-if="!transactionsError"
        ref="table"
        remote
        :columns="columns"
        :data="transactionsResponse?.transactions"
        :loading="transactionsLoading"
        :pagination="pagination"
      >
        <template #loading><div v-if="transactionsLoading"></div></template>
      </n-data-table>
      <server-error-component v-else :error="transactionsError" @retry="refreshTransactions()" />
      <server-error-component v-if="!!tagsError" :error="tagsError" @retry="resetTags()" />
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import type { SelectOption, DataTableColumn } from 'naive-ui';
import { NSkeleton } from 'naive-ui';
import TruncatedAddressComponent from '../other/TruncatedAddressComponent.vue';
import ServerErrorComponent from '../other/ServerError.vue';
import type {
  TagSearchRequestDTO,
  TagSearchResponseDTO,
  TransactionDTO,
  TransactionSearchRequestDTO,
  TransactionSearchResponseDTO,
} from '~/types/dtos';
import type { TransactionSearchForm } from '~/types/forms';

const router = useRouter();
const route = useRoute();
const table = ref();

const columns: DataTableColumn<TransactionDTO>[] = [
  {
    title: 'Transaction',
    key: 'id',
    minWidth: 310,
    render: (row) => (transactionsLoading.value ? h(NSkeleton, { style: { width: '310px', height: '19px' } }) : row.id),
  },
  {
    title: 'Amount',
    key: 'amount',
    minWidth: 90,
    render: (row) =>
      transactionsLoading.value ? h(NSkeleton, { style: { width: '90px', height: '19px' } }) : row.amount,
  },
  {
    title: 'Sender',
    key: 'sender.id',
    render: (row) =>
      transactionsLoading.value
        ? h(NSkeleton, { style: { width: '150px', height: '19px' } })
        : h(TruncatedAddressComponent, { address: row.sender.id, isNFT: false }),
  },
  {
    title: 'Receiver',
    key: 'receiver.id',
    render: (row) =>
      transactionsLoading.value
        ? h(NSkeleton, { style: { width: '150px', height: '19px' } })
        : h(TruncatedAddressComponent, { address: row.receiver.id, isNFT: false }),
  },
  {
    title: 'NFT',
    key: 'nft.id',
    render: (row) =>
      transactionsLoading.value
        ? h(NSkeleton, { style: { width: '150px', height: '19px' } })
        : h(TruncatedAddressComponent, { address: row.nft.id, isNFT: true }),
  },
];

const transactionPageCount = ref(1);
const transactionPageSizes = [5, 10, 15, 20];

const parsePaginationQueryParam = (param: string, defaultValue: number) => {
  const parsedParam = parseInt(param);
  return isNaN(parsedParam) || parsedParam < 1 ? defaultValue : parsedParam;
};

const parsedTransactionPageNumber = parsePaginationQueryParam(route.query.pageNumber as string, 1);
const parsedTransactionPageSize = parsePaginationQueryParam(route.query.pageSize as string, 10);
const parsedTagNames = route.query.tagNames ? (route.query.tagNames as string).split(',') : [];

const tagQuery = ref<TagSearchRequestDTO>({
  pageNumber: 1,
  pageSize: 50,
});

const transactionQuery = ref<TransactionSearchRequestDTO>({
  ...route.query,
  pageNumber: parsedTransactionPageNumber,
  pageSize: transactionPageSizes.includes(parsedTransactionPageSize) ? parsedTransactionPageSize : 10,
  tagNames: parsedTagNames,
});

const searchValues = ref<TransactionSearchForm>({
  senderId: transactionQuery.value.senderId,
  receiverId: transactionQuery.value.receiverId,
  nftId: transactionQuery.value.nftId,
  tagNames: parsedTagNames,
});

const {
  data: transactionsResponse,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error: transactionsError,
} = useFetch('/api/transaction', {
  query: transactionQuery,
});

const { data: tagsResponse, pending: tagsLoading, error: tagsError } = useFetch('/api/tag', { query: tagQuery });

const tagOptions = ref<SelectOption[]>(tagsResponse.value?.tags.map((tag) => ({ value: tag, label: tag })) ?? []);

const resetTags = () => {
  tagQuery.value.pageNumber = 1;
  tagQuery.value.name = '';
};

const handleTagsBlur = () => {
  if (tagQuery.value.name) resetTags();
};

const handleTagsSearch = (value: string) => {
  tagQuery.value.pageNumber = 1;
  tagQuery.value.name = value;
};

const handleTagsScroll = (e: Event) => {
  const { scrollTop, offsetHeight, scrollHeight } = e.currentTarget as HTMLElement;
  const shouldLoadMore = scrollTop + offsetHeight >= scrollHeight - 250;
  const canLoadMore = !tagsLoading.value && tagQuery.value.pageNumber < (tagsResponse.value?.pageCount ?? 0);
  if (shouldLoadMore && canLoadMore) {
    tagQuery.value.pageNumber++;
  }
};

const handleTagsResponse = (response: TagSearchResponseDTO | null) => {
  const newTagOptions = response?.tags.map((tag) => ({ value: tag, label: tag })) ?? [];
  tagOptions.value = tagQuery.value.pageNumber === 1 ? newTagOptions : [...tagOptions.value, ...newTagOptions];
};

const handleTransactionQuery = (query: TransactionSearchRequestDTO) => {
  const serializedTagNames = searchValues.value.tagNames.join(',');
  router.push({ query: { ...query, ...(serializedTagNames ? { tagNames: serializedTagNames } : {}) } });
};

const handleTransactionsResponse = (response: TransactionSearchResponseDTO | null) => {
  transactionPageCount.value = response?.pageCount || 1;
  if (transactionQuery.value.pageNumber > transactionPageCount.value) {
    transactionQuery.value.pageNumber = pagination.page = transactionPageCount.value;
  }
};

const handleTransactionsSearch = () => {
  transactionQuery.value = { ...transactionQuery.value, ...searchValues.value, pageNumber: 1 };
  pagination.page = 1;
};

const handleTransactionPageChange = (pageNumber: number) => {
  transactionQuery.value.pageNumber = pagination.page = pageNumber;
};

const handleTransactionPageSizeChange = (pageSize: number) => {
  transactionQuery.value.pageSize = pagination.pageSize = pageSize;
};

const pagination = reactive({
  page: transactionQuery.value.pageNumber,
  pageSize: transactionQuery.value.pageSize,
  showSizePicker: true,
  pageSizes: transactionPageSizes,
  pageCount: transactionPageCount,
  onChange: handleTransactionPageChange,
  onUpdatePageSize: handleTransactionPageSizeChange,
  simple: false,
});

useResizeObserver(table, (entries) => {
  pagination.simple = entries[0].contentRect.width <= 530;
});

const handleMounted = () => {
  transactionPageCount.value = transactionsResponse.value?.pageCount || 1;
  handleTransactionQuery(transactionQuery.value);
};

watch(tagsResponse, handleTagsResponse);
watch(transactionsResponse, handleTransactionsResponse);
watch(transactionQuery, handleTransactionQuery, { deep: true });
onMounted(handleMounted);
</script>
