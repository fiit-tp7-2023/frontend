<template>
  <div id="documents" class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div>
      <n-h2 class="text-3xl font-bold">Documents</n-h2>
      <n-menu :options="menuOptions" :indent="16" @update-value="handleMenuOptionSelect" />
    </div>
    <div class="lg:col-span-3">
      <content-doc :path="selectedOptionPath"
        ><template #not-found>
          <n-p class="text-xl">Please select a document</n-p>
        </template></content-doc
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { NButton } from 'naive-ui';
import { Icon } from '#components';

const selectedOptionPath = ref('');
const { data: documents } = await useAsyncData('minute-books', () => queryContent('/').find());

const downloadPdf = (doc: ParsedContent) => {
  const link = document.createElement('a');
  link.href = `${doc._path}.pdf`;
  link.download = doc.title as string;
  link.target = '_blank';
  link.click();
};

const renderDownloadIconButton = (doc: ParsedContent) => {
  return h(NButton, { text: true, onClick: () => downloadPdf(doc) }, () =>
    h(Icon, { name: 'mdi:download', size: '24px' }),
  );
};

const menuOptions: MenuOption[] = [
  {
    label: 'Minute books',
    key: 'minute-books',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('minute-book'))
      .map((doc) => ({
        label: doc.title,
        key: doc.title,
        path: doc._path,
        icon: () => renderDownloadIconButton(doc),
      })),
  },
  {
    label: 'Retrospectives',
    key: 'retrospectives',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('retrospective'))
      .map((doc) => ({ label: doc.title, key: doc.title, path: doc._path, icon: () => renderDownloadIconButton(doc) })),
  },
];

const handleMenuOptionSelect = (_: string, option: MenuOption) => {
  selectedOptionPath.value = option.path as string;
};
</script>
