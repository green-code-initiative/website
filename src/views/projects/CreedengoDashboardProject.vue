<script setup lang="ts">
import ChartLineIcon from "@/assets/icons/chart_line.svg?component";
import CircleCheckBigIcon from "@/assets/icons/circle_check_big.svg?component";
import CircuitBoardIcon from "@/assets/icons/circuit_board.svg?component";
import ExternalLinkIcon from "@/assets/icons/external_link.svg?component";
import TargetIcon from "@/assets/icons/target.svg?component";
import WrenchIcon from "@/assets/icons/wrench.svg?component";
import ProjectContribution from "@/components/projects/ProjectContribution.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppFeatureCard from "@/components/shared/AppFeatureCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";

const contributionOpportunities = [
  {
    title: "Tester les intégrations",
    description:
      "Essayez l'extension VS Code en version préliminaire et partagez vos retours. Le plugin SonarQube est en cours de finalisation.",
  },
  {
    title: "Développer le tableau de bord",
    description:
      "Apportez votre expérience en Vue.js ou en visualisation de données.",
  },
];

const contributionGuide = {
  href: "https://github.com/green-code-initiative/creedengo-dashboard/blob/main/CONTRIBUTING.md",
  label: "Lire le guide de contribution",
  external: true,
};
</script>

<template>
  <AppSection
    sub-title="Modernisez vos applications sans perdre de vue leur empreinte environnementale."
    container
  >
    <div class="reference-links">
      <AppButton
        link="https://www.capgemini.com/fr-fr/perspectives/blog/cloud-et-green-it/"
        type="external_link"
        text="Article Capgemini : Cloud et Green IT"
        variant="neutral"
      />
      <AppButton
        link="https://fr.linkedin.com/pulse/modernisation-applicative-cloud-et-num%C3%A9rique-un-trio-pascal"
        type="external_link"
        text="Modernisation applicative et numérique responsable"
        variant="neutral"
      />
    </div>
  </AppSection>

  <AppSection title="Fonctionnalités principales" container>
    <div class="features-grid">
      <AppFeatureCard title="Visualisation des métriques" :icon="ChartLineIcon">
        Visualisez les métriques d'éco-conception issues des analyses Creedengo.
      </AppFeatureCard>
      <AppFeatureCard title="Priorisation des actions" :icon="TargetIcon">
        Priorisez les améliorations de code selon leur impact environnemental.
      </AppFeatureCard>
      <AppFeatureCard
        title="Prévention des régressions"
        :icon="CircleCheckBigIcon"
      >
        Repérez les régressions avant la mise en production.
      </AppFeatureCard>
      <AppFeatureCard title="Architecture modulaire" :icon="CircuitBoardIcon">
        Réutilisez les mêmes widgets web dans votre IDE, votre CI/CD ou vos
        wikis.
      </AppFeatureCard>
      <AppFeatureCard title="Catalogue de widgets testables" :icon="WrenchIcon">
        Testez chaque widget séparément dans Storybook.
      </AppFeatureCard>
      <AppFeatureCard title="Architecture ouverte" :icon="ExternalLinkIcon">
        Connectez le tableau de bord à différents environnements et sources de
        données.
      </AppFeatureCard>
    </div>
  </AppSection>

  <AppSection title="Intégrations disponibles et futures" container>
    <div class="integration-grid">
      <AppCard class="integration-card">
        <div class="header">
          <h3>Extension VSCode</h3>
          <span class="status-badge available">Disponible</span>
        </div>
        <p>
          Intégration directe dans Visual Studio Code pour que les développeurs
          puissent consulter les métriques d'éco-conception sans quitter leur
          IDE.
        </p>
        <AppButton
          text="Télécharger"
          variant="primary"
          href="https://github.com/green-code-initiative/creedengo-dashboard/releases"
          type="external_link"
        />
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Plugin SonarQube</h3>
          <span class="status-badge in-progress">En développement</span>
        </div>
        <p>
          Page d'extension SonarQube permettant de visualiser les métriques
          d'éco-conception directement dans l'interface SonarQube du projet.
        </p>
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Intégrations CI/CD</h3>
          <span class="status-badge planned">Planifié</span>
        </div>
        <p>
          Intégration dans les workflows CI/CD (GitHub, GitLab, Bitbucket, Azure
          DevOps) pour afficher les métriques dans les Pull/Merge Requests.
        </p>
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Wikis et documentation</h3>
          <span class="status-badge planned">Planifié</span>
        </div>
        <p>
          Widgets intégrables dans les wikis projet (Confluence, GitHub/GitLab,
          SharePoint) pour sensibiliser les décideurs.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <ProjectContribution
    description="Aidez-nous à faire évoluer Creedengo Dashboard. Le guide explique comment lancer le projet en local et comprendre son architecture."
    :opportunities="contributionOpportunities"
    :action="contributionGuide"
  />

  <ContactForm
    title="Besoin d'aide ou d'informations ?"
    section-id="creedengo-dashboard"
    :individual-options="[
      'Je souhaite contribuer au développement',
      'Je veux intégrer le dashboard dans mon organisation',
      'J\'ai besoin d\'aide pour l\'installation',
      'J\'ai une question technique',
      'Autre sujet',
    ]"
    :organization-options="[
      'Intégration du dashboard dans notre infrastructure',
      'Formation des équipes',
      'Support technique',
      'Partenariat',
      'Autre demande',
    ]"
  />
</template>

<style scoped lang="scss">
.reference-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 1.25rem;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
}

.integration-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .status-badge {
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    align-self: flex-start;

    &.available {
      background-color: hsl(var(--primary-200));
      color: hsl(var(--primary-900));
    }

    &.in-progress {
      background-color: hsl(var(--warning-300));
      color: hsl(var(--neutral-900));
    }

    &.planned {
      background-color: hsl(var(--secondary-100));
      color: hsl(var(--secondary-900));
    }
  }

  p {
    color: hsl(var(--text-accent));
  }

  a {
    align-self: flex-end;
  }
}
</style>
