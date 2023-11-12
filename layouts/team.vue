<template>
  <header>
    <team-navigation />
  </header>
  <main class="w-full grid grid-cols-1 md:grid-cols-5">
    <div class="hidden md:block" />
    <div class="col-span-3 px-4 md:px-0">
      <slot />
    </div>
    <div class="hidden md:block" />
  </main>
  <footer>
    <team-footer />
  </footer>
</template>
<script setup lang="ts">
import TeamNavigation from '~/components/team-info/layout/TeamNavigation.vue';
import TeamFooter from '~/components/team-info/layout/TeamFooter.vue';
</script>
