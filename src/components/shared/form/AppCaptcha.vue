<script setup lang="ts">
import { captchaChallengeUrl } from "@/util/fetch";
import type { WidgetAttributes } from "altcha/types";
import { onMounted, type DefineComponent } from "vue";

declare module "vue" {
  interface GlobalComponents {
    "altcha-widget": DefineComponent<WidgetAttributes>;
  }
}

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
