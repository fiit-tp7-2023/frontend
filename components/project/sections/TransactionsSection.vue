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
      <n-button type="primary" strong class="w-full" @click="handleSearch()">Search</n-button>
      <n-data-table
        v-if="!error"
        ref="table"
        remote
        :columns="columns"
        :data="transactionsResponse?.transactions"
        :loading="transactionsLoading"
        :pagination="pagination"
      />
      <div v-else>Error: {{ error }}</div>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import TruncatedAddressComponent from '../other/TruncatedAddressComponent.vue';
import type { LocationQueryRaw } from '#vue-router';
import type { TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';
import type { TransactionSearchForm } from '~/types/forms';

const router = useRouter();
const route = useRoute();
const table = ref();

const columns = [
  {
    title: 'Transaction',
    key: 'id',
    minWidth: 130,
  },
  {
    title: 'Amount',
    key: 'amount',
    minWidth: 90,
  },
  {
    title: 'Sender',
    key: 'sender.id',
    render: (row: TransactionDTO) => h(TruncatedAddressComponent, { address: row.sender.id, isNFT: false }),
  },
  {
    title: 'Receiver',
    key: 'receiver.id',
    render: (row: TransactionDTO) => h(TruncatedAddressComponent, { address: row.receiver.id, isNFT: false }),
  },
  {
    title: 'NFT',
    key: 'nft.id',
    render: (row: TransactionDTO) => h(TruncatedAddressComponent, { address: row.nft.id, isNFT: true }),
  },
];

const pageCount = ref(1);
const pageSizes = [5, 10, 15, 20];

const parsedPageNumber = parseInt(route.query.pageNumber as string);
const parsedPageSize = parseInt(route.query.pageSize as string);

const query = ref<TransactionSearchRequestDTO>({
  ...route.query,
  pageNumber: isNaN(parsedPageNumber) || parsedPageNumber < 1 ? 1 : parsedPageNumber,
  pageSize: isNaN(parsedPageSize) || !pageSizes.includes(parsedPageSize) ? 10 : parsedPageSize,
});
const searchValues = ref<TransactionSearchForm>({
  senderId: query.value.senderId,
  receiverId: query.value.receiverId,
  nftId: query.value.nftId,
});

const {
  data: transactionsResponse,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error,
} = useFetch('/api/transaction', {
  query,
});

const handleQuery = (query: LocationQueryRaw) => {
  router.push({ query });
};

const handleMounted = () => {
  pageCount.value = transactionsResponse.value?.pageCount || 1;
  handleQuery(query.value);
};

const handleResponse = (response: TransactionSearchResponseDTO | null) => {
  if (!response || response.pageCount === 0) {
    pageCount.value = 1;
  } else {
    pageCount.value = response.pageCount;
  }

  if (query.value.pageNumber! > pageCount.value) {
    query.value = { ...query.value, pageNumber: pageCount.value };
    pagination.page = pageCount.value;
  }
};

const handleSearch = () => {
  query.value = { ...query.value, ...searchValues.value, pageNumber: 1 };
  pagination.page = 1;
};

const handlePageChange = (pageNumber: number) => {
  query.value = { ...query.value, pageNumber };
  pagination.page = pageNumber;
};

const handlePageSizeChange = (pageSize: number) => {
  query.value = { ...query.value, pageSize };
  pagination.pageSize = pageSize;
};

const pagination = reactive({
  page: query.value.pageNumber,
  pageSize: query.value.pageSize,
  showSizePicker: true,
  pageSizes,
  pageCount,
  onChange: handlePageChange,
  onUpdatePageSize: handlePageSizeChange,
  simple: true,
});

useResizeObserver(table, (entries) => {
  const w = entries[0].contentRect.width;
  if (w <= 530) {
    pagination.simple = true;
  } else {
    pagination.simple = false;
  }
});

watch(transactionsResponse, handleResponse);
watch(query, handleQuery);
onMounted(handleMounted);
</script>
