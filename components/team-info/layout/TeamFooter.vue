<template>
  <div class="flex place-content-center items-center space-x-3 p-5">
    <div class="h-6">
      <NuxtLink to="https://github.com/fiit-tp7-2023" target="_blank" class="transition-all hover:text-[#fe0854]">
        <Icon size="1.5em" name="mdi:github" class="!align-top" />
        GitHub
      </NuxtLink>
    </div>
    <div class="h-6">•</div>
    <div class="h-6">{{ new Date().getFullYear() }}</div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
