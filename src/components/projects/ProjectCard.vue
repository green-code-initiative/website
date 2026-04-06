<script setup lang="ts">
import type { Component } from "vue";

export interface Project {
  path: string;
  name: string;
  logoComponent: Component;
  status: string;
  type?: string;
  description: string;
}

defineProps<{ project: Project }>();
</script>

<template>
  <router-link
    :to="project.path"
    class="project-card"
    :aria-label="project.name"
  >
    <div class="header">
      <div class="header-text">
        <h2 class="project-name">{{ project.name }}</h2>
        <span class="project-type">
          {{ project.type }}
        </span>
      </div>

      <component
        :is="project.logoComponent"
        width="40"
        height="40"
        :alt="`Logo ${project.name}`"
      />
    </div>

    <span class="status-badge" :class="project.status">
      {{ project.status === "published" ? "Publié" : "Brouillon" }}
    </span>

    <p class="description">{{ project.description }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  box-shadow: var(--shadow-border-small);
  border-radius: var(--radius);

  &:hover {
    box-shadow:
      var(--shadow-border),
      0 4px 8px rgba(0, 0, 0, 0.08);
  }

  .header {
    display: flex;
    gap: 1rem;
  }
}

svg {
  color: hsl(var(--primary-700));
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(var(--text-neutral));
  word-wrap: break-word;
}

.project-type {
  color: hsl(var(--text-accent));
}

.status-badge {
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  align-self: flex-start;

  &.published {
    background-color: hsl(var(--primary-200));
    color: hsl(var(--primary-900));
  }

  &.in-progress,
  &.draft {
    background-color: hsl(var(--warning-300));
    color: hsl(var(--neutral-900));
  }
}
</style>
