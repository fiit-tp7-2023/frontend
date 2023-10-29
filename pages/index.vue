<template>
  <div>
    <h1>Team section index page</h1>
    <n-button type="info" @click="$router.push('/project/login')">Project section</n-button>
    <team-section></team-section>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui';
import TeamSection from '../components/team-info/sections/TeamSection.vue';

definePageMeta({
  auth: false,
  layout: 'team',
});
</script>
