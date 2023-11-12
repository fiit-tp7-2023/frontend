<template>
  <div class="text-center sm:w-52 md:w-24">
    <img :src="image" alt="avatar" class="rounded-full overflow-hidden sm:w-52 sm:h-52 md:w-24 md:h-24 m-auto" />
    <p class="uppercase text-xl">{{ props.name }}</p>
    <p>{{ props.role }}</p>
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

const image = computed(() => props.image ?? `https://api.dicebear.com/7.x/pixel-art/png?seed=${props.name}`);
</script>
