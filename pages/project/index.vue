<template>
  <n-card class="w-full" title="Transactions">
    <template #header-extra>
      <n-button type="primary" text @click="refreshTransactions()">
        <Icon size="25" name="material-symbols:sync-rounded" />
      </n-button>
    </template>
    <n-data-table v-if="!error" :columns="columns" :data="transactions!" :loading="transactionsLoading" />
    <div v-else>Error: {{ error }}</div>
  </n-card>
</template>

<script setup lang="ts">
import { NDataTable, NCard, NButton } from 'naive-ui';

const {
  data: transactions,
  refresh: refreshTransactions,
  pending: transactionsLoading,
  error,
} = useFetch('/api/transaction/search');

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
</script>
