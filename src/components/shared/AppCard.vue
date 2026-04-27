<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "secondary";
    padding?: "default" | "comfortable";
    align?: "start" | "center";
  }>(),
  { variant: "default", padding: "default", align: undefined },
);
</script>

<template>
  <div
    class="card"
    :class="[
      `variant-${variant}`,
      `padding-${padding}`,
      align
        ? `align-${align}`
        : padding === 'comfortable'
          ? 'align-center'
          : 'align-start',
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  gap: 1rem;

  &.variant-default {
    background: hsl(var(--surface));
    color: hsl(var(--text-neutral));
  }

  &.variant-primary {
    background: linear-gradient(
      200deg,
      hsl(var(--primary-600)) 4%,
      hsl(var(--primary-800)) 86%
    );
    color: white;
  }

  &.variant-secondary {
    background: linear-gradient(
      200deg,
      hsl(var(--secondary-400)) -14%,
      hsl(var(--secondary-700)) 86%
    );
    color: white;
  }

  &.padding-default {
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 2rem;
    }
  }

  &.padding-comfortable {
    padding: 2rem;
    gap: 1.5rem;

    @media (min-width: 768px) {
      padding: 3rem 2rem;
    }
  }

  &.align-start {
    align-items: flex-start;
    text-align: left;
  }

  &.align-center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
