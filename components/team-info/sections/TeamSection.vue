<template>
  <div id="team" class="overflow-hidden md:flex flex-col items-center space-y-10">
    <h1 class="text-3xl text-center font-bold mb-0">Our Team</h1>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
      <team-member-component name="Viktor" role="Role" />
      <team-member-component name="Kiko" role="Role" />
    </div>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
      <team-member-component name="Adam" role="Role" />
      <team-member-component name="Karolína" role="Role" />
      <team-member-component name="Alexandra" role="Role" />
    </div>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
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
