<template>
  <div :class="[memberColor]">
    {{ member }}
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
const props = defineProps({
  member: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<'red' | 'blue'>,
    default: 'red',
  },
});

const memberColor = computed(() => {
  if (props.color === 'red') {
    return 'text-red-500';
  }
  return 'text-blue-500';
});
</script>

<style></style>
