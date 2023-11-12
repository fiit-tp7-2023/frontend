<template>
  <div class="relative isolate py-24" :class="[bgColor]">
    <div class="absolute w-screen top-0 left-0 -z-30 transform-gpu blur-3xl">
      <div class="aspect-square w-screen bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 tag-bg-gradient" />
    </div>
    <div class="flex flex-col max-w-7xl gap-24">
      <team-info />
      <team-section />
      <documents-section />
    </div>
  </div>
</template>
<script lang="ts" setup>
import TeamSection from '../components/team-info/sections/TeamSection.vue';
import TeamInfo from '~/components/team-info/sections/TeamInfo.vue';
import DocumentsSection from '~/components/team-info/sections/DocumentsSection.vue';

definePageMeta({
  auth: false,
  layout: 'team',
});

const { colorMode } = useNaiveColorMode();

const bgColor = computed(() => {
  if (colorMode.value === 'dark') {
    return 'bg-gray-900';
  } else {
    return 'bg-white';
  }
});
</script>

<style scoped>
.tag-bg-gradient {
  clip-path: polygon(
    74.1% 44.1%,
    100% 61.6%,
    97.5% 26.9%,
    85.5% 0.1%,
    80.7% 2%,
    72.5% 32.5%,
    60.2% 62.4%,
    52.4% 68.1%,
    47.5% 58.3%,
    45.2% 34.5%,
    27.5% 76.7%,
    0.1% 64.9%,
    17.9% 100%,
    27.6% 76.8%,
    76.1% 97.7%,
    74.1% 44.1%
  );
}
</style>
