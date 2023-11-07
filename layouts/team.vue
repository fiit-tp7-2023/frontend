<template>
  <header>
    <team-navigation />
  </header>
  <slot />
  <timeline-component />

  <footer>
    <team-footer />
  </footer>
</template>
<script setup lang="ts">
import TeamNavigation from '~/components/team-info/layout/TeamNavigation.vue';
import TeamFooter from '~/components/team-info/layout/TeamFooter.vue';
import TimelineComponent from '~/components/team-info/sections/TimelineComponent.vue';
</script>
