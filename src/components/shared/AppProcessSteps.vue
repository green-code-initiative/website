<script setup lang="ts">
defineProps<{
  steps: readonly { title: string; description: string }[];
}>();
</script>

<template>
  <ol class="process-steps">
    <li v-for="step in steps" :key="step.title">
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </li>
  </ol>
</template>

<style scoped lang="scss">
.process-steps {
  max-width: 44rem;
  margin-inline: auto;
  padding-inline-start: 2rem;

  li {
    padding-block: 1rem;
    padding-inline-start: 0.5rem;

    & + li {
      border-block-start: 1px solid hsl(var(--surface-accent));
    }

    &::marker {
      color: hsl(var(--text-primary));
      font-weight: 900;
    }
  }

  h3 {
    margin-block-end: 0.25rem;
    font-size: 1.125rem;
    font-weight: 800;
  }

  p {
    color: hsl(var(--text-accent));
    line-height: 1.6;
  }
}
</style>
