<template>
  <n-affix :trigger-top="0" class="w-full backdrop-blur-md bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]">
    <div class="z-50 p-5 flex justify-between w-full">
      <h1 class="text-3xl font-bold">ChainMates</h1>
      <div class="items-center flex space-x-7">
        <span class="hidden md:flex justify-between gap-6">
          <a
            v-for="(link, text) in pages"
            :key="text"
            :value="link"
            :href="link"
            class="text-xl hover:text-pink-600 transition-all"
            active-class="text-purple-400 underline underline-offset-8"
            >{{ text }}
          </a>
        </span>
        <n-button text @click="changeTheme">
          <Icon size="30px" name="mdi:theme-light-dark" />
        </n-button>
      </div>
    </div>
  </n-affix>
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
