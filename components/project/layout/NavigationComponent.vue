<template>
  <n-card class="rounded-md" size="small">
    <header class="flex justify-between items-center">
      <span class="flex justify-between items-center">
        <nuxt-img width="40" height="40" src="/images/logo-pink.svg" />
        <n-button class="text-lg h-1/2 ml-2 font-bold" text @click="$router.replace('/project')">
          Graph explorer
        </n-button>
      </span>
      <span class="flex justify-evenly items-center mr-2 gap-2">
        <span v-if="status == 'authenticated'" class="hidden md:block"
          >Welcome {{ data?.user?.name ?? 'unknown user' }}!</span
        >
        <n-button text @click="changeTheme">
          <Icon size="30px" name="mdi:theme-light-dark" />
        </n-button>
        <n-button v-if="status == 'authenticated'" text @click="handleSignOut">
          <Icon size="30px" name="ri:logout-box-line" />
        </n-button>
      </span>
    </header>
  </n-card>
</template>

<script lang="ts" setup>
const { signOut, status, data } = useAuth();

const handleSignOut = async () => {
  await signOut({ callbackUrl: '/project/login' });
};

const { colorModePreference, colorMode } = useNaiveColorMode();

const changeTheme = () => {
  if (colorMode.value === 'dark') {
    colorModePreference.set('light');
  } else {
    colorModePreference.set('dark');
  }
};
</script>
