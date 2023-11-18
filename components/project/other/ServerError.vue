<template>
  <div
    class="fixed top-0 right-0 z-50 w-screen h-screen bg-black bg-opacity-75 flex center justify-center items-center"
  >
    <n-dialog ref="dialog" type="error" title="Server error" :closable="closable">
      <div class="min-w-[300px]">
        <n-text strong>{{ error.statusText }}</n-text>
        <n-text>{{ error.statusMessage }}</n-text>
      </div>
      <template #action>
        <n-button :loading="loading" strong @click="retry">
          <template #icon>
            <Icon name="material-symbols:sync-rounded" />
          </template>
          Retry
        </n-button>
        <n-button v-if="closable" @click="$emit('close')">Close</n-button>
      </template>
    </n-dialog>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { type FetchError } from 'ofetch';
import { type NDialog } from 'naive-ui';

defineProps({
  error: {
    type: Object as PropType<FetchError>,
    required: true,
  },
  closable: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'retry'): Promise<void>;
}>();

const loading = ref(false);

const dialog = ref<InstanceType<typeof NDialog> | null>(null);

const retry = async () => {
  if (loading.value) return;
  loading.value = true;
  await emit('retry');
  loading.value = false;
};
</script>
