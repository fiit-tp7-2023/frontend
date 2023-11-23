<template>
  <div id="documents" class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div>
      <n-h2 class="text-3xl font-bold">Documents</n-h2>
      <n-menu :options="menuOptions" :indent="16" @update-value="handleMenuOptionSelect" />
    </div>
    <div ref="documentScrollView" class="lg:col-span-3">
      <content-doc :path="selectedOptionPath"
        ><template #not-found>
          <n-text class="text-xl">Please select a document</n-text>
        </template></content-doc
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { h } from 'vue';
import { NButton } from 'naive-ui';
import { Icon } from '#components';

const selectedOptionPath = ref('');
const { data: documents } = await useAsyncData('minute-books', () => queryContent('/').find());

// TODO: Delete PDFs in public folder and use this code to generate PDFs when the document API will be completely funcional
// import type { DocumentRequestDTO } from '~/types/dtos';
// const downloadPdf = async (doc: ParsedContent) => {
//   const query: DocumentRequestDTO = {
//     contentRelativePath: doc._file,
//   };

//   const pdf = await $fetch<Blob>('/api/document', { query });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(pdf);
//   link.download = doc.title as string;
//   link.target = '_blank';
//   link.click();
// };

const downloadPdf = (doc: ParsedContent) => {
  const link = document.createElement('a');
  link.href = `${doc._path}.pdf`;
  link.download = doc.title as string;
  link.target = '_blank';
  link.click();
};

const renderMenuItem = (doc: ParsedContent) => {
  return h('div', { class: 'flex items-center' }, [
    h(
      NButton,
      {
        text: true,
        onClick: () => documentScrollView.value!.scrollIntoView({ behavior: 'smooth' }),
        class: 'mr-5',
      },
      doc.title as string,
    ),

    h(NButton, { text: true, onClick: () => downloadPdf(doc), class: 'mr-6' }, () =>
      h(Icon, { name: 'mdi:arrow-collapse-down', size: '20px' }),
    ),
  ]);
};

const documentScrollView = ref<HTMLElement>();

const menuOptions: MenuOption[] = [
  {
    label: 'Minute books',
    key: 'minute-books',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('minute-book'))
      .map((doc) => ({
        label: () => renderMenuItem(doc),
        key: doc.title,
        path: doc._path,
        onClick: () => documentScrollView.value!.scrollIntoView({ behavior: 'smooth' }),
      })),
  },
  {
    label: 'Retrospectives',
    key: 'retrospectives',
    children: documents.value
      ?.filter((doc) => doc.title?.startsWith('retrospective'))
      .map((doc) => ({
        label: () => renderMenuItem(doc),
        key: doc.title,
        path: doc._path,
        onClick: () => documentScrollView.value!.scrollIntoView({ behavior: 'smooth' }),
      })),
  },
];

const handleMenuOptionSelect = (_: string, option: MenuOption) => {
  selectedOptionPath.value = option.path as string;
};
</script>
