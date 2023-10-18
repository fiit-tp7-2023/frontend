<template>
  <header>Project section header <button @click="handleSignOut">Sign out</button></header>
  <slot />
  <footer>Project section footer</footer>
</template>

<script lang="ts" setup>
const { signOut } = useAuth();

const handleSignOut = async () => {
  await signOut({ callbackUrl: "/" });
};
</script>
