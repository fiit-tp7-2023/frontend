<template>
  <n-affix :trigger-top="0" class="w-full backdrop-blur-md bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]">
    <div class="z-50 p-5 flex justify-between w-full">
      <span class="flex justify-between items-center">
        <nuxt-img width="45" height="45" src="/images/logo-pink.svg" />
        <n-button text class="text-3xl font-bold ml-2" @click="scrollToTop">ChainMates</n-button>
      </span>
      <div class="items-center flex space-x-7">
        <span class="hidden md:flex justify-between gap-6">
          <n-button v-for="(link, text) in pages" :key="text" text size="large" @click="scrollTo(link)">{{
            text
          }}</n-button>
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
  About: 'about',
  'Our Team': 'team',
  Timeline: 'timeline',
  Documents: 'documents',
};

const { colorModePreference, colorMode } = useNaiveColorMode();

const changeTheme = () => {
  if (colorMode.value === 'dark') {
    colorModePreference.set('light');
  } else {
    colorModePreference.set('dark');
  }
};

const scrollTo = (link: string) => {
  const element = document.getElementById(link);
  if (!element) return;
  const headerOffset = 100;

  window.scrollTo({
    top: element.offsetTop - headerOffset,
    behavior: 'smooth',
  });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
