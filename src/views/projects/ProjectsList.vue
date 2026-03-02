<script setup lang="ts">
import projectsData from "@/assets/data/projects.json";
import ProjectList from "@/components/projects/ProjectList.vue";
import { useHead } from "@unhead/vue";
import { ref } from "vue";

useHead({
  title: "Nos Projets - Green Code Initiative",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les projets du collectif Green Code Initiative pour réduire l'empreinte environnementale du logiciel",
    },
  ],
});

const projects = ref(projectsData);
const selectedType = ref("all");
const selectedStatus = ref("all");
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>Nos Projets</h1>
    </div>
  </div>
  <div class="container">
    <div class="filters">
      <!-- eslint-disable vuejs-accessibility/label-has-for -->
      <div class="filter-group">
        <label for="type-filter">Type de projet :</label>
        <select id="type-filter" v-model="selectedType">
          <option value="all">Tous les types</option>
          <option value="Outils d'analyse">Outils d'analyse</option>
          <option value="Documentation">Documentation</option>
          <option value="Recherche">Recherche</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="status-filter">Statut :</label>
        <select id="status-filter" v-model="selectedStatus">
          <option value="all">Tous les statuts</option>
          <option value="published">Publié</option>
          <option value="draft">Brouillon</option>
        </select>
      </div>
    </div>

    <ProjectList
      :projects="projects"
      :selected-type="selectedType"
      :selected-status="selectedStatus"
    />
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding: 2rem 0.5rem;
  background-color: hsl(var(--neutral-50));
  box-shadow: var(--shadow-border-small);

  h1 {
    font-weight: 900;
  }

  p {
    font-size: 1.125rem;
    margin: 0.5rem 0 0;
  }

  @media (min-width: 1144px) {
    padding: 4rem 2rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  max-width: 1080px;
  gap: 1.5rem;

  @media (min-width: 1112px) {
    margin: 0 auto;
  }
}

.filters {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 0;

  .filter-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      font-weight: 600;
    }

    select {
      padding: 0.5rem;
      border: 1px solid hsl(var(--neutral-300));
      border-radius: 4px;
      background: white;
      cursor: pointer;

      &:focus {
        outline: 2px solid hsl(var(--text-accent));
        outline-offset: 1px;
      }
    }
  }
}
</style>
