<template>
  <div>
    <h1>Login page</h1>
    <n-button type="info" @click="handleSignIn">Sign in with Google</n-button>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui';
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/project',
  },
  layout: false,
});

const { signIn } = useAuth();

const handleSignIn = async () => {
  await signIn('google');
};
</script>
