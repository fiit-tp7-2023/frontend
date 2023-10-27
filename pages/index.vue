<template>
  <div>
    <h1>Team section index page</h1>
    <n-button type="info" @click="$router.push('/project/login')">Project section</n-button>
    <client-only>
      <n-theme-editor />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NThemeEditor } from 'naive-ui';
definePageMeta({
  auth: false,
  layout: 'team',
});
</script>
