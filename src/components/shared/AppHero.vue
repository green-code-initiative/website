<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    subTitle?: string;
    variant?: "default" | "primary" | "secondary";
  }>(),
  { subTitle: undefined, variant: "default" },
);
</script>

<template>
  <header class="hero" :class="variant">
    <div class="inner">
      <slot name="icon" />
      <h1 class="title">{{ title }}</h1>
      <p v-if="subTitle" class="subtitle">{{ subTitle }}</p>
      <slot />
      <div v-if="$slots.actions" class="actions">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(
    100deg,
    hsl(var(--background)) 0%,
    hsl(var(--primary-300) / 0.15) 100%
  );
  box-shadow: var(--shadow-border-small);

  &.primary {
    background: linear-gradient(
      160deg,
      hsl(var(--primary-50)) 0%,
      hsl(var(--primary-100)) 100%
    );
  }

  &.secondary {
    background: linear-gradient(
      160deg,
      hsl(var(--secondary-50)) 0%,
      hsl(var(--secondary-100)) 100%
    );
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 2rem;
    text-align: center;

    @media (max-width: 768px) {
      padding: 2.5rem 1.25rem;
      gap: 1rem;
    }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 900;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .subtitle {
    font-size: 1.125rem;
    color: hsl(var(--text-accent));
    max-width: 700px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
