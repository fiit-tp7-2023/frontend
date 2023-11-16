<template>
  <div class="header">
    <div class="z-10 p-5 flex justify-between w-full">
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

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
}

.light .header {
  background-color: white;
}

.dark .header {
  background-color: rgb(17, 24, 39);
}
</style>
