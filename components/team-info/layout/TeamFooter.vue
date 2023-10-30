<template>
  <div class="flex place-content-center items-center space-x-3 bg-zinc-900 text-white h-14">
    <div class="h-6">
      <NuxtLink to="https://github.com/fiit-tp7-2023" target="_blank" class="hover:text-purple-400">
        <Icon size="1.5em" name="mdi:github" color="white" class="mr-1" />
        <p class="inline-block">GitHub</p>
      </NuxtLink>
    </div>
    <div class="h-6">•</div>
    <div class="h-6">{{ new Date().getFullYear() }}</div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
