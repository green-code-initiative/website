<script setup lang="ts">
import ProjectList from "@/components/projects/ProjectList.vue";
import { useHead } from "@unhead/vue";
import { computed, ref } from "vue";
import { useRouter, type RouteRecordNormalized } from "vue-router";

type RouteWithProjectMeta = RouteRecordNormalized & {
  meta: { project: NonNullable<RouteRecordNormalized["meta"]["project"]> };
};

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

const router = useRouter();

const projects = computed(() =>
  router
    .getRoutes()
    .filter((route): route is RouteWithProjectMeta => !!route.meta.project)
    .map((route) => ({
      path: route.path,
      name: route.meta.project.title,
      logoComponent: route.meta.project.logoComponent,
      type: route.meta.project.type,
      status: route.meta.project.status,
      description: route.meta.project.description,
    })),
);

const selectedType = ref("all");
const selectedStatus = ref("all");
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>Nos Projets</h1>
    </div>
  </div>
  <main class="container">
    <div class="filters">
      <label for="type-filter">
        Type de projet :
        <select id="type-filter" v-model="selectedType">
          <option value="all">Tous les types</option>
          <option value="Outils d'analyse">Outils d'analyse</option>
          <option value="Documentation">Documentation</option>
          <option value="Tableau de bord">Tableau de bord</option>
        </select>
      </label>

      <label for="status-filter">
        Statut :
        <select id="status-filter" v-model="selectedStatus">
          <option value="all">Tous les statuts</option>
          <option value="published">Publié</option>
          <option value="draft">Brouillon</option>
        </select>
      </label>
    </div>

    <ProjectList
      :projects="projects"
      :selected-type="selectedType"
      :selected-status="selectedStatus"
    />
  </main>
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
</style>
