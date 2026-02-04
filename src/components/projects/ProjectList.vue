<template>
  <div class="project-list">
    <div v-if="filteredProjects.length === 0" class="no-results">
      <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
    </div>
    
    <div v-else class="projects-grid">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProjectCard from './ProjectCard.vue';

interface Project {
  id: string;
  name: string;
  slug: string;
  icon: string;
  status: string;
  type: string;
  shortDescription: string;
}

const props = defineProps<{
  projects: Project[];
  selectedType: string;
  selectedStatus: string;
}>();

const filteredProjects = computed(() => {
  return props.projects.filter(project => {
    const matchesType = props.selectedType === 'all' || project.type === props.selectedType;
    const matchesStatus = props.selectedStatus === 'all' || project.status === props.selectedStatus;
    return matchesType && matchesStatus;
  });
});
</script>

<style scoped lang="scss">
.project-list {
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.no-results {
  text-align: center;
  padding: 3rem 1rem;
  
  p {
    font-size: 1.125rem;
    color: #666;
  }
}
</style>
