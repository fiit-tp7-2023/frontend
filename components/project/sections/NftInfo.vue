<template>
  <n-card class="rounded-md text-start mb-3">
    <div class="grid md:grid-cols-3 gap-3 align-top">
      <div class="col-span-1">
        <n-p class="text-xl md:hidden">{{ address }}</n-p>
        <img :src="nftData?.image" />
        <n-p class="text-xl">Description</n-p>
        <n-skeleton v-if="nftLoading" height="1rem" width="100%" />
        <n-p v-else>{{ nftDescription }}</n-p>
      </div>
      <div class="col-span-2">
        <n-p class="hidden text-xl md:block">{{ address }}</n-p>
        <n-p>Token ID: {{ nftData?.tokenId }}</n-p>
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
      :data="transactionsData?.transactions"
      :pagination="transactionsPagination"
    />
  </n-card>
  <server-error-component v-if="nftError" :error="nftError" @retry="refreshNftData()" />
  <server-error-component v-if="transactionsError" :error="transactionsError" @retry="refreshTransactions()" />
</template>

<script setup lang="ts">
import type { DataTableColumn } from 'naive-ui';
import { NSkeleton, NDataTable } from 'naive-ui';
import { $obtain } from '@kodadot1/minipfs';
import ServerErrorComponent from '../other/ServerError.vue';
import TruncatedAddressComponent from '../other/TruncatedAddressComponent.vue';
import type { NFTDTO, TransactionDTO, TransactionSearchRequestDTO, TransactionSearchResponseDTO } from '~/types/dtos';
const transactionsTable = ref<InstanceType<typeof NDataTable> | undefined>();

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
        : h(TruncatedAddressComponent, { address: row.sender.address, isNFT: false }),
  },
  {
    title: 'Receiver',
    key: 'receiver.id',
    render: (row) =>
      transactionsLoading.value
        ? h(NSkeleton, { style: { width: '150px', height: '19px' } })
        : h(TruncatedAddressComponent, { address: row.receiver.address, isNFT: false }),
  },
];

const {
  query: transactionsPaginationQuery,
  pagination: transactionsPagination,
  updatePageCount,
  pushQueryToUrl,
} = usePagination<TransactionSearchResponseDTO>(transactionsTable);

const transactionsQuery = computed<TransactionSearchRequestDTO>(() => ({
  nftAddress: props.address,
  ...transactionsPaginationQuery.value,
}));

const {
  data: nftData,
  pending: nftLoading,
  error: nftError,
  refresh: refreshNftData,
} = useFetch<NFTDTO>(`/api/nft/${props.address}`);

const nftDescription = computed(() => nftData.value?.description ?? 'No description');

const {
  data: transactionsData,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error: transactionsError,
} = useFetch('/api/transaction', {
  query: transactionsQuery,
});

const sources = ref<string[]>();

onMounted(async () => {
  updatePageCount(transactionsData.value, false);
  pushQueryToUrl(transactionsPaginationQuery.value);
  if (nftData.value?.uri) {
    console.log(nftData.value?.uri);
    const data = await $obtain<{ image: string }>(nftData.value.uri);
    sources.value = [data.image];
  }
});
watch(transactionsData, (data) => updatePageCount(data));
watch(transactionsPaginationQuery, pushQueryToUrl, { deep: true });
</script>
