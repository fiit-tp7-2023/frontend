<template>
  <n-card class="rounded-md" size="small">
    <header class="flex justify-between items-center">
      <span class="flex justify-between items-center">
        <nuxt-img width="80" height="80" src="/images/logo.png" />
        <h1 class="text-lg h-1/2">Graph explorer</h1>
      </span>
      <span class="flex justify-evenly items-center mr-2" :class="{ 'w-1/6': status === 'authenticated' }">
        <span v-if="status == 'authenticated'">Welcome {{ data?.user?.name ?? 'unknown user' }}!</span>
        <n-button text type="tertiary" @click="changeTheme">
          <Icon size="30px" name="mdi:theme-light-dark" :color="theme === 'light' ? 'black' : 'white'" />
        </n-button>
        <n-button v-if="status == 'authenticated'" type="tertiary" text @click="handleSignOut">
          <Icon size="30px" name="ri:logout-box-line" :color="theme === 'light' ? 'black' : 'white'" />
        </n-button>
      </span>
    </header>
  </n-card>
</template>

<script lang="ts" setup>
import { NCard, NButton } from 'naive-ui';
const { signOut, status, data } = useAuth();

const handleSignOut = async () => {
  await signOut({ callbackUrl: '/project/login' });
};
const theme = useState<'dark' | 'light'>('theme', () => 'dark');
const changeTheme = () => {
  if (theme.value === 'dark') {
    theme.value = 'light';
  } else {
    theme.value = 'dark';
  }
};
</script>
