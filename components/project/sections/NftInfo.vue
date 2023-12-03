<template>
  <n-card class="rounded-md text-start mb-3">
    <div class="grid md:grid-cols-3 gap-3 align-top">
      <div class="col-span-1">
        <n-p class="text-xl md:hidden">{{ address }}</n-p>
        <n-p class="mt-0">NFT image will be here</n-p>
        <n-p class="text-xl">Description</n-p>
        <n-skeleton v-if="nftLoading" height="1rem" width="100%" />
        <n-p v-else>{{ nftDescription }}</n-p>
      </div>
      <div class="col-span-2">
        <n-p class="hidden text-xl md:block">{{ address }}</n-p>
        <n-p>Token ID:</n-p>
        <n-p>Token standard:</n-p>
        <hr class="mb-6" />
        <div class="flex gap-3">
          <p class="whitespace-nowrap pt-1">Tags:</p>
          <div v-if="nftLoading" class="flex flex-wrap gap-1">
            <n-skeleton v-for="n in 4" :key="n" height="1.75rem" width="58px" />
          </div>
          <div v-else class="flex flex-wrap gap-1">
            <n-tag v-for="tag in nftData?.tags" :key="tag.type" size="medium" round>{{ tag.type }}</n-tag>
          </div>
        </div>
      </div>
    </div>
  </n-card>
  <n-card class="rounded-md mb-3" title="Properties">
    <n-data-table :loading="nftLoading" :columns="propertiesColumns" :data="nftData?.attributes" :bordered="false" />
  </n-card>
  <n-card class="rounded-md mb-3" title="Transactions">
    <n-data-table
      v-if="!transactionsError"
      ref="transactionsTable"
      remote
      :columns="transactionColumns"
      :data="transactionsResponse?.transactions"
      :pagination="transactionsPagination"
    />
  </n-card>
  <server-error-component v-if="nftError" :error="nftError" @retry="refreshNftData()" />
  <server-error-component v-if="transactionsError" :error="transactionsError" @retry="refreshTransactions()" />
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import type { DataTableColumn } from 'naive-ui';
import { NSkeleton } from 'naive-ui';
import ServerErrorComponent from '../other/ServerError.vue';
import TruncatedAddressComponent from '../other/TruncatedAddressComponent.vue';
import type { NFTDTO, TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';
import { parsePaginationQueryParam } from '~/utils/pagination';

const router = useRouter();
const route = useRoute();
const transactionsTable = ref();

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
});

const propertiesColumns = [
  {
    title: 'Type',
    key: 'traitType',
    minWidth: 120,
  },
  {
    title: 'Value',
    key: 'value',
    minWidth: 120,
  },
];

const transactionColumns: DataTableColumn<TransactionDTO>[] = [
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
];

const transactionPageCount = ref(1);
const transactionPageSizes = [5, 10, 15, 20];

const parsedTransactionPageNumber = parsePaginationQueryParam(route.query.transactionPageNumber as string, 1);
const parsedTransactionPageSize = parsePaginationQueryParam(route.query.transactionPageSize as string, 10);

const transactionQuery = ref<TransactionSearchRequestDTO>({
  pageNumber: parsedTransactionPageNumber,
  pageSize: transactionPageSizes.includes(parsedTransactionPageSize) ? parsedTransactionPageSize : 10,
  nftId: props.address,
});

const {
  data: nftData,
  pending: nftLoading,
  error: nftError,
  refresh: refreshNftData,
} = useFetch<NFTDTO>(`/api/nft/${props.address}`);

const nftDescription = computed(() => nftData.value?.description ?? 'No description');

const {
  data: transactionsResponse,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error: transactionsError,
} = useFetch('/api/transaction', {
  query: transactionQuery,
});

const handleTransactionQuery = (query: TransactionSearchRequestDTO) => {
  router.push({ query: { transactionPageNumber: query.pageNumber, transactionPageSize: query.pageSize } });
};

const handleTransactionsResponse = (response: TransactionSearchResponseDTO | null) => {
  transactionPageCount.value = response?.pageCount || 1;
  if (transactionQuery.value.pageNumber > transactionPageCount.value) {
    transactionQuery.value.pageNumber = transactionsPagination.page = transactionPageCount.value;
  }
};

const handleTransactionPageChange = (pageNumber: number) => {
  transactionQuery.value.pageNumber = transactionsPagination.page = pageNumber;
};

const handleTransactionPageSizeChange = (pageSize: number) => {
  transactionQuery.value.pageSize = transactionsPagination.pageSize = pageSize;
};

const transactionsPagination = reactive({
  page: transactionQuery.value.pageNumber,
  pageSize: transactionQuery.value.pageSize,
  showSizePicker: true,
  pageSizes: transactionPageSizes,
  pageCount: transactionPageCount,
  onChange: handleTransactionPageChange,
  onUpdatePageSize: handleTransactionPageSizeChange,
  simple: false,
});

useResizeObserver(transactionsTable, (entries) => {
  transactionsPagination.simple = entries[0].contentRect.width <= 530;
});

const handleMounted = () => {
  transactionPageCount.value = transactionsResponse.value?.pageCount || 1;
  handleTransactionQuery(transactionQuery.value);
};

watch(transactionsResponse, handleTransactionsResponse);
watch(transactionQuery, handleTransactionQuery, { deep: true });
onMounted(handleMounted);
</script>
