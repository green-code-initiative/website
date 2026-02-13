<template>
  <article class="project-card">
    <router-link :to="`/projets/${project.slug}`" class="card-link">
      <div class="card-header">
        <img 
          :src="project.icon" 
          :alt="`Logo ${project.name}`" 
          class="project-icon"
        />
        <div class="card-header-text">
          <h3 class="project-name">{{ project.name }}</h3>
          <span class="project-type">
            {{ (project.types || [project.type]).join(' • ') }}
          </span>
        </div>
      </div>
      
      <p class="project-description">{{ project.shortDescription }}</p>
      
      <div class="card-footer">
        <span 
          class="status-badge" 
          :class="project.status"
        >
          {{ project.status === 'published' ? 'Publié' : 'Brouillon' }}
        </span>
        <span class="view-project">Voir le projet →</span>
      </div>
    </router-link>
  </article>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  name: string;
  slug: string;
  icon: string;
  status: string;
  type?: string;
  types?: string[];
  shortDescription: string;
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped lang="scss">
.project-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}

.card-link {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  min-height: 280px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  flex-shrink: 0;
}

.card-header-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  flex: 1;
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 700;
  text-transform: uppercase;
  flex-shrink: 0;

  &.published {
    background: #e8f5e9;
    color: #2e7d32;
  }

  &.in-progress,
  &.draft {
    background: #fff3e0;
    color: #ef6c00;
  }
}

.project-type {
  font-size: 0.875rem;
  color: var(--color-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-description {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 1rem 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.view-project {
  color: var(--color-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease;
  
  .project-card:hover & {
    transform: translateX(4px);
  }
}
</style>
