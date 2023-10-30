<template>
  <n-layout class="h-screen">
    <n-layout-header>
      <navigation-component />
    </n-layout-header>
    <n-layout-content>
      <div class="flex flex-col justify-start gap-2">
        <slot />
      </div>
    </n-layout-content>
    <n-layout-footer>
      <footer-component />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts" setup>
import NavigationComponent from '~/components/project/layout/NavigationComponent.vue';
import FooterComponent from '~/components/project/layout/FooterComponent.vue';
</script>

<style scoped>
.n-layout-header,
.n-layout-content,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 10px;
}

.n-layout-content {
  min-height: calc(100vh - 220px);
}
</style>
