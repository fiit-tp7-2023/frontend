<template>
  <div id="documents" class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div>
      <n-h2 class="text-3xl font-bold">Documents</n-h2>
      <n-menu :options="menuOptions" @update-value="handleMenuOptionSelect" />
    </div>
    <div class="lg:col-span-3">
      <content-doc :path="selectedItemPath"
        ><template #not-found>
          <n-p class="text-xl">Please select a document</n-p>
        </template></content-doc
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui';

const selectedItemPath = ref('');
const { data: documents } = await useAsyncData('minute-books', () => queryContent('/').find());

const menuOptions: MenuOption[] = [
  {
    label: 'Minute books',
    key: 'minute-books',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('minute-book'))
      .map((doc) => ({ label: doc.title, key: doc.title, path: doc._path })),
  },
  {
    label: 'Retrospectives',
    key: 'retrospectives',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('retrospective'))
      .map((doc) => ({ label: doc.title, key: doc.title, path: doc._path })),
  },
];

const handleMenuOptionSelect = (_: string, item: MenuOption) => {
  selectedItemPath.value = item.path as string;
};
</script>
