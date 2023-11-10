<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button text class="cursor-pointer" @click="copyAddress(address)">{{ truncatedAddress }}</n-button>
    </template>
    {{ address }}
  </n-tooltip>
</template>

<script lang="ts" setup>
import copy from 'copy-to-clipboard';
import { TRUNCATE_ETH_ADRESS_REGEX, TRUNCATE_NFT_ADRESS_REGEX } from '~/constants/regex';

const props = defineProps({
  address: {
    type: String,
    default: '',
  },
});
const message = useMessage();
const truncatedAddress = computed(() => truncateAddress(props.address));

const truncateAddress = (address: string) => {
  const match = address.match(TRUNCATE_ETH_ADRESS_REGEX) || address.match(TRUNCATE_NFT_ADRESS_REGEX);
  return match ? `${match[1].slice(0, 6)}...${match[2].slice(-4)}` : address;
};

const copyAddress = (address: string) => {
  copy(address);
  message.info('Copied to clipboard');
  (document.activeElement as HTMLElement | null)?.blur();
};
</script>
