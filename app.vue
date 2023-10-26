<template>
  <n-config-provider :theme="currentTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme } from 'naive-ui';

const theme = useState('theme', () => 'dark');

const currentTheme = computed(() => {
  if (theme.value === 'dark') {
    return darkTheme;
  }
  return lightTheme;
});
</script>
