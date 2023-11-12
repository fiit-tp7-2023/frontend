<template>
  <div id="team" class="overflow-hidden md:flex flex-col items-center space-y-10">
    <h1 class="text-3xl text-center font-bold mb-0">Our Team</h1>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
      <team-member-component name="Viktor" role="Product owner" />
      <team-member-component name="Kiko" role="Product owner" />
    </div>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
      <team-member-component name="Adam" role="Indexer" />
      <team-member-component name="Karolína" role="UX designer" />
      <team-member-component name="Alexandra" role="UX designer" />
    </div>
    <div class="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
      <team-member-component name="Ctibor" role="Data analyst" />
      <team-member-component name="Kiko" role="Front-end developer" />
      <team-member-component name="Braňo" role="Scrum master" />
      <team-member-component name="Samuel" role="Back-end developer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamMemberComponent from './TeamMemberComponent.vue';
</script>

