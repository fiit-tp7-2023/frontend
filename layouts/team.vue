<template>
  <header>Team section header <button @click="goHome">Home</button></header>
  <slot />
  <footer>Team section footer</footer>
</template>

<script lang="ts" setup>
const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
