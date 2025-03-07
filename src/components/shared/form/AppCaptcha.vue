<script setup lang="ts">
import { captchaChallengeUrl } from "@/util/fetch";
import { onMounted } from "vue";

onMounted(async () => {
  await import("altcha");
});
</script>

<template>
  <altcha-widget
    :challengeurl="captchaChallengeUrl"
    name="captcha"
    spamfilter
    floating
  />
</template>
