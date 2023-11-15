<template>
  <div class="text-center w-32">
    <img :src="image" alt="avatar" class="rounded-full" />
    <n-p class="uppercase text-xl mb-1">{{ name }}</n-p>
    <n-p class="m-0">{{ role }}</n-p>
  </div>
</template>

<script lang="ts" setup>
import { NP } from 'naive-ui';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: null,
  },
});

const image = computed(() => props.image ?? `https://api.dicebear.com/7.x/notionists/svg?scale=150&seed=${props.name}`);
</script>
