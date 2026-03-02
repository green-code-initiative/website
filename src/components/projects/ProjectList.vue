<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "./ProjectCard.vue";

interface Project {
  id: string;
  name: string;
  icon: string;
  status: string;
  type: string;
  description: string;
}

const props = defineProps<{
  projects: Project[];
  selectedType: string;
  selectedStatus: string;
}>();

const filteredProjects = computed(() => {
  return props.projects.filter((project) => {
    const matchesType =
      props.selectedType === "all" || project.type === props.selectedType;
    const matchesStatus =
      props.selectedStatus === "all" || project.status === props.selectedStatus;
    return matchesType && matchesStatus;
  });
});
</script>

<template>
  <div class="project-list">
    <p v-if="filteredProjects.length === 0" class="no-result">
      Aucun projet ne correspond aux filtres sélectionnés.
    </p>

    <div v-else class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 0 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

p.no-result {
  padding: 3rem 1rem;
  text-align: center;
  font-size: 1.125rem;
  color: #666;
}
</style>
