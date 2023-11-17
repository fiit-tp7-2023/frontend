<template>
  <naive-config :theme-config="themeConfig">
    <n-message-provider>
      <n-layout>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </n-layout>
    </n-message-provider>
  </naive-config>
</template>
<script setup lang="ts">
import type { ThemeConfig } from '@bg-dev/nuxt-naiveui/dist/runtime/types';

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      primaryColor: '#fe086e',
      primaryColorHover: '#fe0854',
      infoColor: '#43e2f2',
    },
  },
  dark: {
    common: {
      cardColor: 'rgb(17, 24, 48)',
      bodyColor: 'rgb(17, 24, 39)',
    },
    Layout: {
      textColor: '#ffffff',
    },
    Button: {
      textColorText: '#ffffff',
      textColorTextHover: '#fe086e',
    },
  },
  light: {
    Layout: {
      textColor: '#000000',
    },
    Button: {
      textColorText: '#000000',
      textColorTextHover: '#fe086e',
    },
  },
};
</script>
