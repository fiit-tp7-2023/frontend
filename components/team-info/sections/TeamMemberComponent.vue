<template>
  <div class="text-center w-32">
    <img :src="image" alt="avatar" class="rounded-full" />
    <n-text class="uppercase text-xl mt-4 mb-1" tag="div">{{ name }}</n-text>
    <n-text tag="div">{{ role }}</n-text>
  </div>
</template>

<script lang="ts" setup>
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
