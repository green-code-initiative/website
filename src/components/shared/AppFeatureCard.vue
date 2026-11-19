<script setup lang="ts">
import AppCard from "@/components/shared/AppCard.vue";
import type { Component } from "vue";

defineProps<{ title: string; icon: Component }>();
</script>

<template>
  <AppCard class="feature-card">
    <div class="feature-icon" aria-hidden="true">
      <component :is="icon" />
    </div>
    <h3>{{ title }}</h3>
    <p><slot /></p>
  </AppCard>
</template>

<style scoped lang="scss">
.feature-card {
  height: 100%;
  border: 1px solid hsl(var(--surface-accent));

  .feature-icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background: hsl(var(--primary-500) / 0.12);
    color: hsl(var(--text-primary));

    :deep(svg) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.35;
  }

  p {
    color: hsl(var(--text-accent));
    line-height: 1.65;
  }
}
</style>
