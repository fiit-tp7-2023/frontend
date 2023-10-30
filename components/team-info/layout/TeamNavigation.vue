<template>
  <div class="text-xl bg-zinc-900 text-white p-5 flex justify-between content-center">
    <NuxtLink to="/" class="text-3xl font-bold">ChainMates</NuxtLink>
    <div class="flex space-x-7">
      <NuxtLink
        v-for="(link, text) in pages"
        :key="text"
        :value="link"
        :to="link"
        class="hover:text-purple-400 transition-all"
        active-class="text-purple-400 underline underline-offset-8"
        >{{ text }}</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const pages = {
  About: '/',
  'Our Team': '/team',
  Timeline: '/timeline',
  Documents: '/documents',
};
</script>
