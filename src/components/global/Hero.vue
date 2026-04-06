<script setup lang="ts">
defineOptions({ name: "AppHero" });
defineProps<{ title: string; subTitle: string }>();
</script>

<template>
  <div class="hero-container">
    <slot></slot>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem;
  text-align: center;

  background-color: hsl(var(--primary-600));
  color: white;

  h1 {
    max-width: 1200px;
    font-size: 2.5rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .actions {
    display: flex;
    gap: 4rem;

    &:empty {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    .actions {
      flex-direction: column;
      gap: 1.2rem;
    }
  }
}
</style>
