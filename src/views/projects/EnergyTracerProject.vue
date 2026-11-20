<script setup lang="ts">
import BracesIcon from "@/assets/icons/braces.svg?component";
import ChartLineIcon from "@/assets/icons/chart_line.svg?component";
import MicroscopeIcon from "@/assets/icons/microscope.svg?component";
import ProjectContribution from "@/components/projects/ProjectContribution.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppFeatureCard from "@/components/shared/AppFeatureCard.vue";
import AppProcessSteps from "@/components/shared/AppProcessSteps.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";

const processSteps = [
  {
    title: "Fournissez deux variantes de code",
    description: 'Une version avec un "code smell" et une version corrigée.',
  },
  {
    title: "Lancez une mesure",
    description:
      "Choisissez un profiler, puis exécutez chaque variante plusieurs fois.",
  },
  {
    title: "Comparez les résultats",
    description:
      "Consultez le rapport pour déterminer quelle variante consomme le moins.",
  },
];

const contributionOpportunities = [
  {
    title: "Ajouter un langage",
    description:
      "Implémentez l'interface CodeRunner pour prendre en charge un nouveau langage (Rust, Go…).",
  },
  {
    title: "Valider les mesures",
    description:
      "Exécutez des expériences sur votre propre matériel pour élargir la base de résultats.",
  },
  {
    title: "Améliorer l'analyseur",
    description:
      "Enrichissez ET-analyzer avec de nouvelles métriques ou de nouveaux formats de rapport.",
  },
  {
    title: "Enrichir la documentation",
    description:
      "Complétez le guide d'expérimentation et les exemples de code mesuré.",
  },
];
</script>

<template>
  <AppSection
    title="Fonctionnalités principales"
    sub-title="EnergyTracer est issu d'un mémoire de master en informatique à l'Université de Namur."
    container
  >
    <div class="features-grid">
      <AppFeatureCard title="Plusieurs langages" :icon="BracesIcon">
        Mesurez la consommation de votre code Python ou Java.
      </AppFeatureCard>

      <AppFeatureCard title="Analyse statistique" :icon="MicroscopeIcon">
        Vérifiez si les écarts sont significatifs et mesurez leur ampleur.
      </AppFeatureCard>

      <AppFeatureCard title="Graphiques comparatifs" :icon="ChartLineIcon">
        Comparez les mesures avec des diagrammes box et violin.
      </AppFeatureCard>
    </div>
  </AppSection>

  <AppSection title="Comment ça fonctionne ?" background-color="grey" container>
    <AppProcessSteps :steps="processSteps" />
    <div class="process-guide">
      <AppButton
        link="https://github.com/green-code-initiative/EnergyTracer/blob/main/EXPERIMENT_GUIDE.md"
        type="external_link"
        text="Guide d'expérimentation"
        variant="neutral"
      />
    </div>
  </AppSection>

  <AppSection title="Profilers pris en charge" container>
    <div class="profilers-list">
      <div class="profiler-item">
        <div class="profiler-icon">🖥️</div>
        <div class="profiler-content">
          <h3>Mac Silicon (Zeus)</h3>
          <p>
            Lecture directe des compteurs matériels via IOKit, avec une
            précision sub-milliseconde par composant (CPU, GPU, ANE, DRAM).
            Réservé aux Mac Apple Silicon.
          </p>
        </div>
      </div>
      <div class="profiler-item">
        <div class="profiler-icon">🌍</div>
        <div class="profiler-content">
          <h3>CodeCarbon</h3>
          <p>
            Estimation logicielle basée sur le TDP du processeur et son taux
            d'utilisation, multiplateforme, avec conversion en équivalent CO₂.
          </p>
        </div>
      </div>
    </div>
  </AppSection>

  <ProjectContribution
    description="Aidez-nous à faire évoluer EnergyTracer et à mieux comprendre ce que consomme notre code."
    :opportunities="contributionOpportunities"
    :action="{ href: '#contact-energy-tracer' }"
  />

  <ContactForm
    title="Une question sur EnergyTracer ?"
    section-id="contact-energy-tracer"
    :individual-options="[
      'Je souhaite contribuer à EnergyTracer',
      'Je souhaite des informations sur EnergyTracer',
    ]"
    :organization-options="[
      'Je souhaite utiliser EnergyTracer dans mon organisation',
      'Je souhaite contribuer à EnergyTracer (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur EnergyTracer',
    ]"
  />
</template>

<style scoped lang="scss">
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1.25rem;
}

.process-guide {
  display: flex;
  justify-content: center;
  margin-block-start: 1rem;
}

.profilers-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.profiler-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  .profiler-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .profiler-content p {
    color: hsl(var(--text-accent));
  }
}
</style>
