<script setup lang="ts">
import { captchaChallengeUrl } from "@/util/fetch";
import { onMounted } from "vue";

onMounted(async () => {
  await import("altcha");
});
</script>

<template>
  <altcha-widget
    :challenge="captchaChallengeUrl"
    name="captcha"
    spamfilter
    display="floating"
  />
</template>
