<template>
  <div class="flex flex-col max-w-7xl">
    <project-info />
    <team-section />
    <timeline-component />
    <documents-section />
  </div>
</template>
<script lang="ts" setup>
import TeamSection from '../components/team-info/sections/TeamSection.vue';
import ProjectInfo from '~/components/team-info/sections/ProjectInfo.vue';
import DocumentsSection from '~/components/team-info/sections/DocumentsSection.vue';
import TimelineComponent from '~/components/team-info/sections/TimelineComponent.vue';

useHead({
  title: 'ChainMates',
});

definePageMeta({
  auth: false,
  layout: 'team',
});
</script>
