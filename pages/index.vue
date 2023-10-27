<template>
  <div class="border-2 border-black">
    <h1>Team section index page</h1>
    <n-button type="info" @click="$router.push('/project/login')">Project section</n-button>
    <team-members />
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui';

import TeamMembers from '~/components/team-info/sections/TeamMembers.vue';
definePageMeta({
  auth: false,
  layout: 'team',
});
</script>
