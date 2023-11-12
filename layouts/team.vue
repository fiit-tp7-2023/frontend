<template>
  <header>
    <team-navigation />
  </header>
  <main class="w-full overflow-hidden isolate relative grid grid-cols-1 md:grid-cols-5" :class="[bgColor]">
    <div class="absolute w-screen top-0 left-0 -z-30 transform-gpu blur-3xl">
      <div class="aspect-square w-screen bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 tag-bg-gradient" />
    </div>
    <div class="hidden md:block" />
    <div class="col-span-3 px-4 md:px-0 py-24">
      <slot />
    </div>
    <div class="hidden md:block" />
  </main>
  <footer>
    <team-footer />
  </footer>
</template>
<script setup lang="ts">
import TeamNavigation from '~/components/team-info/layout/TeamNavigation.vue';
import TeamFooter from '~/components/team-info/layout/TeamFooter.vue';
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
@keyframes bg-shapes {
  0% {
    clip-path: polygon(
      0% 0%,
      100% 61.6%,
      97.5% 26.9%,
      0% 0.1%,
      80.7% 2%,
      72.5% 0%,
      70% 62.4%,
      52.4% 68.1%,
      47.5% 58.3%,
      0% 34.5%,
      27.5% 76.7%,
      0.1% 64.9%,
      17.9% 100%,
      27.6% 76.8%,
      76.1% 97.7%,
      74.1% 0%
    );
  }
  50% {
    clip-path: polygon(
      74.1% 100%,
      100% 61.6%,
      97.5% 26.9%,
      100% 0.1%,
      80.7% 2%,
      72.5% 0%,
      70% 62.4%,
      52.4% 68.1%,
      47.5% 100%,
      50% 34.5%,
      27.5% 76.7%,
      100% 64.9%,
      17.9% 100%,
      27.6% 76.8%,
      76.1% 97.7%,
      74.1% 0%
    );
  }
  100% {
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
}

.tag-bg-gradient {
  animation: bg-shapes 5s ease-in-out infinite alternate;
}
</style>
