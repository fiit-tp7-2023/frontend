<template>
  <n-card class="rounded-md text-start mb-3">
    <div class="grid grid-cols-3 gap-3 align-top">
      <div class="col-span-1">
        <n-p>NFT image will be here</n-p>
        <n-p class="text-xl">Description</n-p>
        <n-p>NFT description will be here</n-p>
      </div>
      <div class="col-span-2">
        <n-p class="text-4xl">{{ route }}</n-p>
        <n-p>Token ID:</n-p>
        <n-p>Token standard:</n-p>
        <hr class="mb-6" />
        <n-card class="rounded-md" title="Tags">
          <n-p>Tag chips will be here</n-p>
        </n-card>
      </div>
    </div>
  </n-card>
  <n-card class="rounded-md mb-3" title="Properties">
    <n-data-table :columns="columns1" :data="data" :pagination="pagination" :bordered="false"
  /></n-card>
  <n-card class="rounded-md mb-3" title="Interactions">
    <n-data-table :columns="columns2" :data="data" :pagination="pagination" :bordered="false"
  /></n-card>
  <n-card class="rounded-md mb-3" title="Transactions">
    <n-data-table :columns="columns3" :data="data" :pagination="pagination" :bordered="false"
  /></n-card>
</template>

<script>
import { defineComponent } from 'vue';

const columns1 = [
  {
    title: 'Type',
    key: 'type',
  },
  {
    title: 'Name',
    key: 'name',
  },
];

const columns2 = [
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Times interacted',
    key: 'timesinteracted',
  },
];

const columns3 = [
  {
    title: 'Hash',
    key: 'hash',
  },
  {
    title: 'From',
    key: 'from',
  },
  {
    title: 'To',
    key: 'to',
  },
];

const data = [];

const pagination = {};

export default defineComponent({
  props: ['route'],
  data() {
    return {
      columns1,
      columns2,
      columns3,
      data,
      pagination,
    };
  },
});
</script>
