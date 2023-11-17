<template>
  <naive-config :theme-config="themeConfig">
    <n-message-provider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
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
    Button: {
      textColorText: '#ffffff',
      textColorTextHover: '#fe086e',
      fontSizeLarge: '1.25rem',
    },
  },
  light: {
    Button: {
      textColorText: '#000000',
      textColorTextHover: '#fe086e',
    },
  },
};
</script>
