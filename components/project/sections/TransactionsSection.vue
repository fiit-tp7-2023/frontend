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
        :data="transactionsData?.transactions"
        :pagination="pagination"
      />
      <server-error-component v-else :error="transactionsError" @retry="refreshTransactions()" />
      <server-error-component v-if="!!tagsError" :error="tagsError" @retry="resetTags()" />
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import type { SelectOption, DataTableColumn } from 'naive-ui';
import { NSkeleton, NDataTable } from 'naive-ui';
import TruncatedAddressComponent from '../other/TruncatedAddressComponent.vue';
import ServerErrorComponent from '../other/ServerError.vue';
import type {
  PaginationRequestDTO,
  TagSearchRequestDTO,
  TagSearchResponseDTO,
  TransactionDTO,
  TransactionSearchRequestDTO,
  TransactionSearchResponseDTO,
} from '~/types/dtos';
import type { TransactionSearchForm } from '~/types/forms';

const route = useRoute();
const table = ref<InstanceType<typeof NDataTable> | undefined>();

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

const {
  query: transactionsPaginationQuery,
  pagination,
  updatePageCount,
  resetPageNumber,
  pushQueryToUrl,
} = usePagination<TransactionSearchResponseDTO>(table);

const tagQuery = ref<TagSearchRequestDTO>({
  pageNumber: 1,
  pageSize: 50,
});

const transactionsQuery = ref<TransactionSearchRequestDTO>({
  ...route.query,
  ...transactionsPaginationQuery.value,
});

const searchValues = ref<TransactionSearchForm>({
  senderId: transactionsQuery.value.senderId,
  receiverId: transactionsQuery.value.receiverId,
  nftId: transactionsQuery.value.nftId,
  tagNames: transactionsQuery.value.tagNames ?? [],
});

const {
  data: transactionsData,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error: transactionsError,
} = await useFetch('/api/transaction', {
  query: transactionsQuery,
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

const handleTransactionsPaginationQuery = (query: PaginationRequestDTO) => {
  transactionsQuery.value.pageNumber = query.pageNumber;
  transactionsQuery.value.pageSize = query.pageSize;
};

const handleTransactionsSearch = () => {
  transactionsQuery.value = { ...transactionsQuery.value, ...searchValues.value, pageNumber: 1 };
  resetPageNumber();
};

onMounted(() => {
  updatePageCount(transactionsData.value, false);
  pushQueryToUrl(transactionsQuery.value);
});
watch(tagsResponse, handleTagsResponse);
watch(transactionsData, (data) => updatePageCount(data));
watch(transactionsPaginationQuery, handleTransactionsPaginationQuery, { deep: true });
watch(transactionsQuery, pushQueryToUrl, { deep: true });
</script>
