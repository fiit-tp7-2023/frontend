<template>
  <n-card class="w-full" title="Project section 1">
    <template #header-extra>
      <n-button type="primary" text @click="refreshForecast()">
        <Icon size="25" name="material-symbols:sync-rounded" />
      </n-button>
    </template>
    <div v-if="forecastLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="forecast in forecasts" :key="forecast.id">{{ forecast.date }} - {{ forecast.temperatureC }} C</li>
    </ul>
  </n-card>
  <n-card v-for="x in [2, 3, 4, 5, 6]" :key="x" :title="`Project section ${x}`">
    <p>Project section {{ x }}</p>
  </n-card>
</template>
<script setup lang="ts">
import { NButton, NCard } from 'naive-ui';
const { data: forecasts, refresh: refreshForecast, pending: forecastLoading, error } = useFetch('/api/weather');
</script>
