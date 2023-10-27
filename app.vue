<template>
  <naive-config :theme-config="currentTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </naive-config>
</template>
<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui';

const theme = useState('theme', () => 'dark');

const currentTheme = computed(() => {
  if (theme.value === 'dark') {
    return darkTheme;
  }
  return lightTheme;
});
</script>
