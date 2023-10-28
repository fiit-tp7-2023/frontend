<template>
  <n-card class="w-full" title="Transactions">
    <template #header-extra>
      <n-button type="primary" text @click="refreshTransactions()">
        <Icon size="25" name="material-symbols:sync-rounded" />
      </n-button>
    </template>
    <n-data-table
      v-if="!error"
      ref="table"
      remote
      :columns="columns"
      :data="searchResponse?.transactions"
      :loading="transactionsLoading"
      :pagination="pagination"
    />
    <div v-else>Error: {{ error }}</div>
  </n-card>
</template>

<script setup lang="ts">
import { NDataTable, NCard, NButton } from 'naive-ui';
import { TransactionSearchRequestDTO } from '~/types/dtos';

const router = useRouter();
const route = useRoute();

const parsedPageNumber = parseInt(String(route.query.pageNumber));
const query = ref<TransactionSearchRequestDTO>({
  ...route.query,
  pageNumber: isNaN(parsedPageNumber) ? 1 : parsedPageNumber,
  pageSize: 10,
});

const {
  data: searchResponse,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error,
} = await useFetch('/api/transaction/search', {
  query,
});

const pageCount = ref(searchResponse.value?.pageCount);

const columns = [
  {
    title: 'Transaction',
    key: 'id',
  },
  {
    title: 'Amount',
    key: 'amount',
  },
  {
    title: 'Sender',
    key: 'sender.id',
  },
  {
    title: 'Receiver',
    key: 'receiver.id',
  },
  {
    title: 'NFT',
    key: 'nft.id',
  },
];

const handlePageChange = (newPageNumber: number) => {
  pagination.page = newPageNumber;
  query.value.pageNumber = newPageNumber;
  router.push({ query: { pageNumber: query.value.pageNumber } });
};

const handlePageSizeChange = (newPageSize: number) => {
  pagination.pageSize = newPageSize;
  query.value.pageSize = newPageSize;
};

const pagination = reactive({
  page: query.value.pageNumber,
  pageSize: query.value.pageSize,
  showSizePicker: true,
  pageSizes: [5, 10, 15, 20],
  pageCount,
  onChange: handlePageChange,
  onUpdatePageSize: handlePageSizeChange,
});

watch(searchResponse, (response) => {
  if (pageCount.value === response?.pageCount) return;

  pageCount.value = response?.pageCount;

  if (!response) return;

  if (query.value.pageNumber! > response.pageCount) {
    query.value.pageNumber = pageCount.value;
    pagination.page = pageCount.value;
    router.push({ query: { pageNumber: query.value.pageNumber } });
  }
});
</script>
