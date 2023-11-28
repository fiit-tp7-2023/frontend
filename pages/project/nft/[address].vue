<template>
  <nft-info :address="address" />
</template>

<script setup lang="ts">
import NftInfo from '~/components/project/sections/NftInfo.vue';

const route = useRoute();
const address = computed(() => route.params.address as string);
</script>
