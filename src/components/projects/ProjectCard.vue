<script setup lang="ts">
interface Project {
  id: string;
  name: string;
  icon: string;
  status: string;
  type?: string;
  description: string;
}

defineProps<{ project: Project }>();
</script>

<template>
  <router-link :to="`/projets/${project.id}`" class="project-card">
    <div class="header">
      <div class="card-header-text">
        <h3 class="project-name">{{ project.name }}</h3>
        <span class="project-type">
          {{ project.type }}
        </span>
      </div>

      <img
        :src="project.icon"
        :alt="`Logo ${project.name}`"
        class="project-icon"
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

.project-icon {
  width: 54px;
  height: 54px;
}

.card-header-text {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(var(--text-neutral));
  margin: 0;
  line-height: 1.3;
  word-wrap: break-word;

  .card-link:hover & {
    text-decoration: underline;
  }
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
    background-color: var(--color-additionnal-1);
    color: hsl(var(--neutral-900));
  }
}
</style>
