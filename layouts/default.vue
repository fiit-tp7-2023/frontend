<template>
  <n-layout class="h-full">
    <n-layout-header>
      <navigation-component />
    </n-layout-header>
    <n-layout-content>
      <n-card><slot /></n-card>
    </n-layout-content>
    <n-layout-footer>
      <footer-component />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
import { NCard, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader } from 'naive-ui';

import NavigationComponent from '~/components/project/layout/NavigationComponent.vue';
import FooterComponent from '~/components/project/layout/FooterComponent.vue';
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
