<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

<template>
  <div class="badge">
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  padding: 6px 8px;
  border-radius: 8px;
  background-color: hsl(var(--surface-accent));
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
