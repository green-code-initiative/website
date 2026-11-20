<script setup lang="ts">
import ProjectContribution from "@/components/projects/ProjectContribution.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";

const contributionOpportunities = [
  {
    title: "Proposer de nouvelles règles",
    description:
      "Identifiez des structures de code inefficaces et proposez des règles pour les améliorer.",
  },
  {
    title: "Expérimenter et valider",
    description:
      "Participez à la validation scientifique des règles proposées.",
  },
  {
    title: "Implémenter des règles",
    description:
      "Développez les détecteurs de règles pour les plugins Creedengo.",
  },
  {
    title: "Améliorer la documentation",
    description:
      "Enrichissez les descriptions, les exemples et les justifications des règles existantes.",
  },
];
</script>

<template>
  <AppSection
    title="Le référentiel des bonnes pratiques d'éco-conception"
    sub-title="Il rassemble toutes les règles d'éco-conception logicielle développées par le collectif. Ce référentiel sert de base aux plugins Creedengo et évolue continuellement grâce aux contributions de la communauté."
    container
  >
    <div class="stats-grid">
      <AppCard class="stat-card" align="center">
        <div class="stat-number">100+</div>
        <div class="stat-label">Règles d'éco-conception</div>
      </AppCard>
      <AppCard class="stat-card" align="center">
        <div class="stat-number">7</div>
        <div class="stat-label">Technologies couvertes</div>
      </AppCard>
      <AppCard class="stat-card" align="center">
        <div class="stat-number">6</div>
        <div class="stat-label">Catégories principales</div>
      </AppCard>
    </div>
  </AppSection>

  <AppSection title="Catégories de règles" container>
    <div class="categories-grid">
      <AppCard class="category-card" align="center">
        <div class="category-icon">🗄️</div>
        <h3>Base de données et persistance</h3>
        <p>
          Optimisation JPA, requêtes N+1, colonnes indexées, utilisation
          efficace des ORM.
        </p>
      </AppCard>

      <AppCard class="category-card" align="center">
        <div class="category-icon">⚡</div>
        <h3>Performance et optimisation</h3>
        <p>
          Optimisation des boucles, expressions conditionnelles, manipulation de
          tableaux, gestion mémoire.
        </p>
      </AppCard>

      <AppCard class="category-card" align="center">
        <div class="category-icon">💾</div>
        <h3>Gestion des ressources</h3>
        <p>
          Fuites mémoire, garbage collection, gestion des fichiers, optimisation
          des ressources système.
        </p>
      </AppCard>

      <AppCard class="category-card" align="center">
        <div class="category-icon">🎨</div>
        <h3>Frontend et UI/UX</h3>
        <p>
          Manipulation du DOM, optimisation CSS, formats d'images, rendu côté
          client efficace.
        </p>
      </AppCard>

      <AppCard class="category-card" align="center">
        <div class="category-icon">📱</div>
        <h3>Mobile</h3>
        <p>
          Géolocalisation, luminosité d'écran, consommation énergétique, cycles
          de vie des applications.
        </p>
      </AppCard>

      <AppCard class="category-card" align="center">
        <div class="category-icon">🤖</div>
        <h3>Data et Intelligence Artificielle</h3>
        <p>
          Vectorisation, opérations sur tenseurs, optimisation des modèles,
          efficacité algorithmique.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <ProjectContribution
    title="Contribuer au référentiel"
    description="Aidez-nous à enrichir le référentiel Green Code Rules avec des pratiques d'éco-conception testées et documentées."
    :opportunities="contributionOpportunities"
    :action="{ href: '#contact-green-code-rules' }"
  />

  <ContactForm
    title="Une question sur le référentiel ?"
    section-id="contact-green-code-rules"
    :individual-options="[
      'Je souhaite contribuer à Green Code Rules',
      'Je souhaite des informations sur Green Code Rules',
    ]"
    :organization-options="[
      'Je souhaite contribuer à Green Code Rules (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur Green Code Rules',
    ]"
  />
</template>

<style scoped lang="scss">
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
}

.stat-card {
  .stat-number {
    font-size: 3rem;
    font-weight: 900;
    color: hsl(var(--primary-700));
  }

  .stat-label {
    font-size: 1.125rem;
    font-weight: 600;
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.category-card {
  .category-icon {
    font-size: 3rem;
  }

  p {
    color: hsl(var(--text-accent));
  }
}
</style>
