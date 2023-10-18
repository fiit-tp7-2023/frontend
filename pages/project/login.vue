<template>
  <div>
    <h1>Login page</h1>
    <button @click="handleSignIn">Sign in with Google</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/project",
  },
  layout: false,
});

const { signIn } = useAuth();

const handleSignIn = async () => {
  await signIn("google");
};
</script>
