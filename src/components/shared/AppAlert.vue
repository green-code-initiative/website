<script lang="ts" setup>
import CircleCheckBigIcon from "@/assets/icons/circle_check_big.svg";
import CircleXIcon from "@/assets/icons/circle_x.svg";
import TriangleAlertIcon from "@/assets/icons/triangle-alert.svg";

defineProps<{ variant: "error" | "success" | "warning" }>();
</script>

<template>
  <div class="alert" :class="variant" aria-live="assertive" role="alert">
    <CircleCheckBigIcon v-if="variant === 'success'" />
    <CircleXIcon v-if="variant === 'error'" />
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

  &.error {
    background-color: rgb(253, 237, 237);
    color: rgb(95, 33, 32);
  }

  &.success {
    background-color: rgb(237, 247, 237);
    color: rgb(30, 70, 32);
  }

  &.warning {
    background-color: var(--color-additionnal-1);
  }
}
</style>
