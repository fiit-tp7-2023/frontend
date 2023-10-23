<template>
  <n-config-provider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
<script setup lang="ts">
// General Font
import 'vfonts/Lato.css';
// Monospace Font
import 'vfonts/FiraCode.css';

import { NConfigProvider } from 'naive-ui';
</script>
