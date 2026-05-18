<script lang="ts" setup>
const challengeStatsUrl = import.meta.env.VITE_CHALLENGE_DASHBOARD_URL;
</script>

<template>
  <iframe
    :src="challengeStatsUrl"
    title="Green Code Challenge Statistics Dashboard"
    allowfullscreen
    allow="autoplay; encrypted-media"
  />
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: calc(100vh - 120px);
  border: none;
  display: block;
}
</style>
