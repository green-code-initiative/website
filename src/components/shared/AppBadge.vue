<script lang="ts" setup>
defineProps<{ text: string; struckThrough?: boolean }>();
</script>

<template>
  <div class="badge" :class="{ struckThrough }">
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

  &.struckThrough {
    color: hsl(var(--text-accent));
    text-decoration: line-through;
  }
}
</style>
