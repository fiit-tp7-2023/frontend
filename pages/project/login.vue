<template>
  <n-card title="Login">
    <n-button class="w-full" type="primary" ghost @click="handleSignIn">Sign in with Google</n-button>
  </n-card>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/project',
  },
});

const { signIn } = useAuth();

const handleSignIn = async () => {
  await signIn('google');
};
</script>
