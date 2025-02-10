<script setup lang="ts">
import BadgeInfoIcon from "@/assets/icons/badge_info.svg";

defineProps({
  content: { type: String, default: null },
});
</script>

<template>
  <div class="banner-container" role="alert">
    <BadgeInfoIcon width="24" height="24" />
    <p v-html="content"></p>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: var(--color-additionnal-1);
  color: var(--color-on-surface);
  font-size: 1.05rem;

  p {
    color: inherit;
  }

  svg {
    flex-shrink: 0;
  }
}
</style>
