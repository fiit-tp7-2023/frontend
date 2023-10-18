<template>
  <div>
    <h1>Team section index page</h1>
    <button @click="$router.push('/project/login')">Project section</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false,
  layout: "team",
});
</script>
