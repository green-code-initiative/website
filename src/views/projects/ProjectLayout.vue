<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const project = computed(() => route.meta.project);

const head = computed(() => ({
  title: `${project.value?.title ?? "Projets"} - Green Code Initiative`,
  meta: [
    {
      name: "description",
      content: project.value
        ? project.value.description
        : "Découvrez les projets du collectif Green Code Initiative pour réduire l'empreinte environnementale du logiciel",
    },
  ],
}));

useHead(head);
</script>

<template>
  <section v-if="project" class="hero-section" :class="project.hero.variant">
    <div class="content">
      <component
        :is="project.logoComponent"
        width="80"
        height="80"
        :alt="`Logo ${project.title}`"
      />
      <div class="title">
        <h1>{{ project.title }}</h1>
        <p v-if="project.subTitle" class="subtitle">{{ project.subTitle }}</p>
      </div>
      <p class="description">
        {{ project.description }}
      </p>
      <div class="actions">
        <AppButton
          text="Voir sur GitHub"
          variant="primary"
          type="external_link"
          :link="project.githubLink"
        />
        <AppButton
          v-if="project.hero.secondButton"
          v-bind="project.hero.secondButton"
        />
      </div>
    </div>
  </section>
  <RouterView />
</template>

<style lang="scss" scoped>
.hero-section {
  box-shadow: var(--shadow-border-small);
  padding: 3rem 2rem 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 2rem;
  }

  &.primary {
    background: hsl(var(--primary-300) / 0.15);
  }

  &.secondary {
    background: hsl(var(--secondary-300) / 0.15);
  }

  &.neutral {
    background: hsl(var(--accent));
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;

      h1 {
        font-size: 3.5rem;
        font-weight: 900;
        margin: 0;

        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      .subtitle {
        font-size: 1.125rem;
        opacity: 0.9;
        margin: 0;
        font-style: italic;
      }
    }

    .description {
      font-size: 1.25rem;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 1.125rem;
      }
    }

    .actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
