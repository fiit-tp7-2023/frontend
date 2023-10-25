<template>
  <n-card>
    <header>
      <n-space justify="space-between" align="center" class="mx-2">
        <h1>Graph explorer</h1>
        <span>
          <n-button type="tertiary" @click="handleSignOut">
            Sign out
            <template #icon>
              <Icon name="ri:logout-box-line" color="black" />
            </template>
          </n-button>
          <n-button type="tertiary" @click="changeTheme">
            Change theme
            <template #icon>
              <Icon name="mdi:theme-light-dark" color="black" />
            </template>
          </n-button>
        </span>
      </n-space>
    </header>
  </n-card>
</template>

<script lang="ts" setup>
import { NCard, NSpace, NButton } from 'naive-ui';
const { signOut } = useAuth();

const handleSignOut = async () => {
  await signOut({ callbackUrl: '/' });
};
const theme = useState('theme', () => 'dark');
const changeTheme = () => {
  if (theme.value === 'dark') {
    theme.value = 'light';
  } else {
    theme.value = 'dark';
  }
};
</script>
