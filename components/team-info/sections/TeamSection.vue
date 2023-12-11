<template>
  <div id="team">
    <n-h1 class="text-3xl text-center font-bold mb-10 mt-20">Our Team</n-h1>
    <div class="hidden lg:flex flex-col items-center gap-10">
      <div v-for="(team, rowIndex) in teams" :key="rowIndex" class="flex flex-row items-start gap-10">
        <team-member-component
          v-for="(member, memberIndex) in team"
          :key="memberIndex"
          :name="member.name"
          :role="member.role"
          :image="member.image"
        />
      </div>
    </div>
    <n-carousel draggable class="lg:hidden">
      <team-member-component
        v-for="(member, index) in allTeamMembers"
        :key="index"
        :name="member.name"
        :role="member.role"
        :image="member.image"
        class="mb-5 mx-auto"
      />
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
  </div>
</template>

<script lang="ts" setup>
import TeamMemberComponent from './TeamMemberComponent.vue';

const teams = {
  firstRow: [
    {
      name: 'Kiko',
      role: 'Product owner',
      image: '/avatars/kiko.svg',
    },
    {
      name: 'Viki',
      role: 'Product owner',
      image: '/avatars/viky.svg',
    },
  ],
  secondRow: [
    {
      name: 'Kaja',
      role: 'Frontend developer',
      image: '/avatars/kaja.svg',
    },
    { name: 'Adam', role: 'Indexer', image: '/avatars/adam.svg' },
    {
      name: 'Alex',
      role: 'Frontend developer',
      image: '/avatars/alex.svg',
    },
  ],
  thirdRow: [
    {
      name: 'Ctibor',
      role: 'Data analyst',
      image: '/avatars/ctibor.svg',
    },
    { name: 'Braňo', role: 'Data analyst', image: '/avatars/brano.svg' },
    { name: 'Kiko', role: 'Backend developer', image: '/avatars/chico.svg' },
    {
      name: 'Samo',
      role: 'Backend developer',
      image: '/avatars/samo.svg',
    },
  ],
};
const allTeamMembers = Object.values(teams).flat();
</script>

<style scoped>
.custom-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.custom-dots li {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: rgba(128, 128, 128, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  background: #fe086e;
}
</style>
