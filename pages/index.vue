<template>
  <div class="flex flex-col max-w-7xl gap-24">
    <team-info />
    <team-section />
    <timeline-component />
    <documents-section />
  </div>
</template>
<script lang="ts" setup>
import TeamSection from '../components/team-info/sections/TeamSection.vue';
import TeamInfo from '~/components/team-info/sections/TeamInfo.vue';
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
