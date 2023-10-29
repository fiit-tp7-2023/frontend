<template>
  <div class="flex flex-col items-center space-y-5">
    <h1 class="text-3xl font-bold mb-0">Product Owners</h1>
    <div class="flex space-x-10">
      <team-member-component name="Viktor" role="Role" />
      <team-member-component name="Kiko" role="Role" />
    </div>
    <h1 class="text-3xl font-bold mb-0">Our Team</h1>
    <div class="flex space-x-10">
      <team-member-component name="Adam" role="Role" />
      <team-member-component name="Karolína" role="Role" />
      <team-member-component name="Alexandra" role="Role" />
    </div>
    <div class="flex space-x-10">
      <team-member-component name="Ctibor" role="Role" />
      <team-member-component name="Kiko" role="Role" />
      <team-member-component name="Braňo" role="Role" />
      <team-member-component name="Samuel" role="Role" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamMemberComponent from './TeamMemberComponent.vue';
</script>

<style></style>
