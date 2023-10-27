<template>
  <header>
    <team-navigation />
  </header>
  <slot />
  <footer>
    <team-footer />
  </footer>
</template>
<script setup lang="ts">
import TeamNavigation from '~/components/team-info/layout/TeamNavigation.vue';
import TeamFooter from '~/components/team-info/layout/TeamFooter.vue';
</script>
