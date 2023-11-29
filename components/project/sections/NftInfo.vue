<template>
  <n-card class="rounded-md text-start mb-3">
    <div class="grid grid-cols-3 gap-3 align-top">
      <div class="col-span-1">
        <n-p>NFT image will be here</n-p>
        <n-p class="text-xl">Description</n-p>
        <n-p>NFT description will be here</n-p>
      </div>
      <div class="col-span-2">
        <n-p class="text-xl">{{ address }}</n-p>
        <n-p>Token ID:</n-p>
        <n-p>Token standard:</n-p>
        <hr class="mb-6" />
        <table>
          <td class="whitespace-nowrap p-0 pr-3 align-middle">Tags:</td>
          <td class="p-0">
            <div v-if="nftLoading || nftError" class="flex flex-wrap gap-1">
              <n-skeleton v-for="n in 4" :key="n" height="28px" width="58px" />
            </div>
            <div v-else class="flex flex-wrap gap-1">
              <n-tag v-for="tag in nftData?.tags" :key="tag.type" size="medium" round>{{ tag.type }}</n-tag>
            </div>
          </td>
        </table>
      </div>
    </div>
  </n-card>
  <n-card class="rounded-md mb-3" title="Properties">
    <n-data-table :columns="columns1" :data="data" :pagination="pagination" :bordered="false" />
  </n-card>
  <n-card class="rounded-md mb-3" title="Transactions">
    <n-data-table :columns="columns3" :data="data" :pagination="pagination" :bordered="false" />
  </n-card>
  <server-error-component v-if="nftError" :error="nftError" @retry="refreshNftData()" />
</template>

<script setup lang="ts">
import ServerErrorComponent from '../other/ServerError.vue';
import type { NFTDTO } from '~/types/dtos';

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
});

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

const data: Record<string, unknown>[] = [];

const pagination = {};

const {
  data: nftData,
  pending: nftLoading,
  error: nftError,
  refresh: refreshNftData,
} = useFetch<NFTDTO>(`/api/nft/${props.address}`);
</script>
