<template>
  <div>
    <h1>Project section index page</h1>
    <button @click="refreshForecast()">Refresh forecast</button>
    <div>{{ forecast }}</div>
  </div>
</template>
<script setup lang="ts">
const { data } = useFetch("/api/token");
const { data: forecast, refresh: refreshForecast } = useAsyncData(
  "forecast",
  () =>
    $fetch("https://localhost:7210/WeatherForecast", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer: " + data.value?.googleAccessToken,
      },
    })
);
</script>
