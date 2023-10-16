<template>
  <div>
    <h1>Home page</h1>
    <button @click="goToPage('/team/about')">Team section</button>
    <button @click="goToPage('/project/login')">Project section</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false,
});

const router = useRouter();

const goToPage = (url: string) => {
  router.push(url);
};
</script>
