<template>
  <div>
    <h1>Project section index page</h1>
    <button @click="refreshForecast()">Refresh forecast</button>
    <div v-if="forecastLoading">Loading...</div>
    <ul v-else>
      <li v-for="forecast in forecasts" :key="forecast.id">{{ forecast.date }} - {{ forecast.temperatureC }} C</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { data: forecasts, refresh: refreshForecast, pending: forecastLoading } = useFetch('/api/weather');
</script>
