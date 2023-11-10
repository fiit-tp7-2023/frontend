<template>
  <div class="bg-zinc-900 z-10 text-white p-5 flex justify-between w-full">
    <h1 class="text-3xl font-bold">ChainMates</h1>
    <div class="items-center flex space-x-7">
      <span class="hidden md:flex justify-between gap-2">
        <a
          v-for="(link, text) in pages"
          :key="text"
          :value="link"
          :href="link"
          class="text-xl hover:text-purple-400 transition-all"
          active-class="text-purple-400 underline underline-offset-8"
          >{{ text }}
        </a>
      </span>
      <n-button text type="tertiary" @click="changeTheme">
        <Icon size="30px" name="mdi:theme-light-dark" color="white" />
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const pages = {
  About: '#about',
  'Our Team': '#team',
  Timeline: '#timeline',
  Documents: '#documents',
};

const { colorModePreference, colorMode } = useNaiveColorMode();

const changeTheme = () => {
  if (colorMode.value === 'dark') {
    colorModePreference.set('light');
  } else {
    colorModePreference.set('dark');
  }
};
</script>
