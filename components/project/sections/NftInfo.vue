<template>
  <n-card class="rounded-md text-start mb-3">
    <div class="grid md:grid-cols-3 gap-3 align-top">
      <div class="col-span-1">
        <n-p class="text-xl md:hidden">{{ address }}</n-p>
        <n-p class="mt-0">NFT image will be here</n-p>
        <n-p class="text-xl">Description</n-p>
        <n-p>{{ nftData?.description ?? 'No description' }}</n-p>
      </div>
      <div class="col-span-2">
        <n-p class="hidden text-xl md:block">{{ address }}</n-p>
        <n-p>Token ID:</n-p>
        <n-p>Token standard:</n-p>
        <hr class="mb-6" />
        <div class="flex gap-3">
          <p class="whitespace-nowrap pt-1">Tags:</p>
          <div v-if="nftLoading || nftError" class="flex flex-wrap gap-1">
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
    <n-data-table :columns="columns3" :data="data" :pagination="pagination" :bordered="false" />
  </n-card>
  <server-error-component v-if="nftError" :error="nftError" @retry="refreshNftData()" />
</template>

<script setup lang="ts">
import { NSkeleton } from 'naive-ui';
import ServerErrorComponent from '../other/ServerError.vue';
import type { NFTDTO } from '~/types/dtos';

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
