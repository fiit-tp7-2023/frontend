<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button text class="cursor-pointer" @click="copyAddress" @contextmenu="(e) => handleContextMenu(e)">{{
        truncatedAddress
      }}</n-button>
    </template>
    {{ address }}
  </n-tooltip>
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :options="options"
    :show="showDropdown"
    :on-clickoutside="closeDropdown"
  />
</template>

<script lang="ts" setup>
import copy from 'copy-to-clipboard';
import { NButton } from 'naive-ui';
import { NuxtLink } from '#components';
import { TRUNCATE_ETH_ADRESS_REGEX, TRUNCATE_NFT_ADRESS_REGEX } from '~/constants/regex';

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
  isNFT: {
    type: Boolean,
    required: true,
  },
});

const message = useMessage();
const truncatedAddress = computed(() => truncateAddress(props.address));
const etherscanAddress = computed(() => getEtherscanAddress(props.isNFT, props.address));
const showDropdown = ref(false);
const x = ref(0);
const y = ref(0);

const renderCopyButton = () =>
  h(NButton, { onClick: copyAddress, text: true, class: 'my-2 mx-4' }, () => 'Copy to clipboard');

const renderEtherscanLink = () =>
  h(NuxtLink, { to: etherscanAddress.value, target: '_blank' }, () =>
    h(NButton, { text: true, class: 'my-2 mx-4', onClick: closeDropdown }, () => 'Etherscan'),
  );

const options = [
  {
    render: renderCopyButton,
    type: 'render',
  },
  {
    render: renderEtherscanLink,
    type: 'render',
  },
];

const closeDropdown = () => (showDropdown.value = false);
const openDropdown = () => (showDropdown.value = true);

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  closeDropdown();
  nextTick().then(() => {
    openDropdown();
    x.value = e.clientX;
    y.value = e.clientY;
  });
};

const copyAddress = (e: MouseEvent) => {
  copy(props.address);
  message.info('Copied to clipboard');
  (e.currentTarget as HTMLElement | null)?.blur();
  closeDropdown();
};

const truncateAddress = (address: string) => {
  const match = props.isNFT ? address.match(TRUNCATE_NFT_ADRESS_REGEX) : address.match(TRUNCATE_ETH_ADRESS_REGEX);
  return match ? `${match[1].slice(0, 6)}...${match[2].slice(-4)}` : address;
};

const getEtherscanAddress = (isNFT: boolean, address: string) => {
  if (isNFT) {
    const parts = address.split('_');
    return parts.length > 0 ? `https://etherscan.io/token/${parts[0]}` : 'https://etherscan.io';
  } else {
    return `https://etherscan.io/address/${address}`;
  }
};
</script>
