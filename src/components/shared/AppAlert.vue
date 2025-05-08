<script lang="ts" setup>
import TriangleAlertIcon from "@/assets/icons/triangle-alert.svg";

defineProps<{ variant: "warning" }>();
</script>

<template>
  <div class="alert" :class="variant">
    <TriangleAlertIcon v-if="variant === 'warning'" />
    <p>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  border-radius: var(--radius);
  padding: 1rem;

  svg {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  &.warning {
    background-color: var(--color-additionnal-1);
  }
}
</style>
