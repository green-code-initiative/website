<template>
  <div class="projets-view">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Nos Projets</h1>
        <p class="hero-description">
          Découvrez les projets du collectif Green Code Initiative pour réduire l'empreinte environnementale du logiciel
        </p>
      </div>
    </section>

    <section class="filters-section">
      <div class="filters-container">
        <!-- eslint-disable vuejs-accessibility/label-has-for -->
        <div class="filter-group">
          <label for="type-filter">Type de projet :</label>
          <select id="type-filter" v-model="selectedType" class="filter-select">
            <option value="all">Tous les types</option>
            <option value="Outils d'analyse">Outils d'analyse</option>
            <option value="Documentation">Documentation</option>
            <option value="Recherche">Recherche</option>
          </select>
        </div>

        <div class="filter-group">
          <label for="status-filter">Statut :</label>
          <select id="status-filter" v-model="selectedStatus" class="filter-select">
            <option value="all">Tous les statuts</option>
            <option value="published">Publié</option>
            <option value="draft">Brouillon</option>
          </select>
        </div>
        <!-- eslint-enable vuejs-accessibility/label-has-for -->
      </div>
    </section>

    <section class="projects-section">
      <div class="projects-container">
        <ProjectList 
          :projects="projects" 
          :selected-type="selectedType"
          :selected-status="selectedStatus"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import ProjectList from '@/components/projects/ProjectList.vue';
import projectsData from '@/assets/data/projects.json';

useHead({
  title: 'Nos Projets - Green Code Initiative',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les projets du collectif Green Code Initiative : Creedengo, EcoSonar, Green Code Rules pour réduire l\'empreinte environnementale du logiciel'
    }
  ]
});

const projects = ref(projectsData);
const selectedType = ref('all');
const selectedStatus = ref('all');
</script>

<style scoped lang="scss">
.projets-view {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 1rem 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 0;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}

.filters-section {
  background: #f5f5f5;
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
}

.filters-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  label {
    font-weight: 600;
    color: var(--color-primary);
    white-space: nowrap;
  }
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  min-width: 200px;

  &:hover,
  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

.projects-section {
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
