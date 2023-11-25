<template>
  <nft-info :route="route.params.address" />
</template>

<script setup lang="ts">
import NftInfo from '~/components/project/sections/NftInfo.vue';
const route = useRoute();
console.log(route.params.address);
</script>
