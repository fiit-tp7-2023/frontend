<template>
  <n-card title="Login">
    <n-button class="w-full" type="primary" strong ghost @click="handleSignIn">Sign in with Google</n-button>
  </n-card>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'redirect',
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
