<script setup lang="ts">
import ChartLineIcon from "@/assets/icons/chart_line.svg?component";
import GithubIcon from "@/assets/icons/github.svg?component";
import SearchIcon from "@/assets/icons/search.svg?component";
import ProjectContribution from "@/components/projects/ProjectContribution.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppFeatureCard from "@/components/shared/AppFeatureCard.vue";
import AppProcessSteps from "@/components/shared/AppProcessSteps.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";

const contributionOpportunities = [
  {
    title: "Écrire des requêtes CodeQL",
    description:
      "Développez de nouvelles requêtes pour détecter les anti-patterns d'éco-conception dans différents langages.",
  },
  {
    title: "Tester et valider",
    description:
      "Testez les requêtes existantes sur vos projets et partagez vos résultats.",
  },
  {
    title: "Enrichir la documentation",
    description:
      "Améliorez les guides d'utilisation, les exemples et les bonnes pratiques de configuration.",
  },
  {
    title: "Partager vos retours",
    description:
      "Signalez les problèmes, proposez des améliorations et partagez vos cas d'usage.",
  },
];

const processSteps = [
  {
    title: "Activez CodeQL",
    description:
      "Activez l'analyse de code dans la section Security de votre dépôt GitHub et configurez les workflows CodeQL.",
  },
  {
    title: "Ajoutez les packs Green CodeQL",
    description:
      "Référencez les query packs Green CodeQL dans votre configuration CodeQL pour inclure les règles d'éco-conception.",
  },
  {
    title: "Analysez et corrigez",
    description:
      "Consultez les alertes générées dans l'onglet Security et suivez les recommandations pour améliorer votre code.",
  },
];
</script>

<template>
  <AppSection
    title="Analyse d'éco-conception native dans GitHub"
    sub-title="Green CodeQL offre une collection de packs de requêtes CodeQL pour détecter automatiquement les comportements non écologiques dans votre code (processus inutiles, fuites mémoire, etc.) directement dans vos dépôts GitHub grâce à l'analyse statique native de la plateforme."
    container
  >
    <div class="features-grid">
      <AppFeatureCard title="Détection automatique" :icon="SearchIcon">
        Repérez les pratiques de code inefficaces grâce aux alertes GitHub.
      </AppFeatureCard>

      <AppFeatureCard title="Intégration native" :icon="GithubIcon">
        Ajoutez les règles d'éco-conception à vos analyses CodeQL.
      </AppFeatureCard>

      <AppFeatureCard title="Suivi continu" :icon="ChartLineIcon">
        Suivez votre dette d'éco-conception au fil des commits et pull requests.
      </AppFeatureCard>
    </div>
  </AppSection>

  <AppSection title="Comment ça fonctionne ?" background-color="grey" container>
    <AppProcessSteps :steps="processSteps" />
  </AppSection>

  <AppSection
    title="Technologies supportées"
    sub-title="Green CodeQL évolue progressivement pour couvrir plusieurs langages de programmation supportés par CodeQL."
    container
  >
    <div class="languages-grid">
      <AppCard class="language-card" align="center">
        <div class="language-icon">☕</div>
        <h3>Java/Kotlin</h3>
        <p>Détection d'anti-patterns dans les applications Java et Spring.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">🐍</div>
        <h3>Python</h3>
        <p>
          Identification des problèmes d'efficacité dans le code Python et les
          frameworks ML.
        </p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">📜</div>
        <h3>JavaScript/TypeScript</h3>
        <p>
          Analyse des applications web pour détecter les patterns énergivores.
        </p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">⚙️</div>
        <h3>C/C++</h3>
        <p>Optimisation des applications natives en C et C++.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">🔷</div>
        <h3>C# (.NET)</h3>
        <p>Optimisation des applications .NET et ASP.NET Core.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">▶️</div>
        <h3>Actions/YAML</h3>
        <p>Amélioration de l'efficacité des workflows CI/CD.</p>
      </AppCard>
    </div>
  </AppSection>

  <ProjectContribution
    description="Aidez-nous à faire évoluer Green CodeQL pour repérer les pratiques de code gourmandes en ressources."
    :opportunities="contributionOpportunities"
    :action="{ href: '#contact-green-codeql' }"
  />

  <ContactForm
    title="Besoin d'aide avec Green CodeQL ?"
    section-id="contact-green-codeql"
    :individual-options="[
      'Je souhaite contribuer à Green CodeQL',
      'Je souhaite des informations sur Green CodeQL',
      'J\'ai besoin d\'aide pour l\'intégration',
    ]"
    :organization-options="[
      'Je souhaite contribuer à Green CodeQL (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur Green CodeQL',
      'Je souhaite un accompagnement pour l\'intégration',
    ]"
  />
</template>

<style scoped lang="scss">
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.25rem;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
}

.language-card {
  .language-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: hsl(var(--primary-700));
  }

  p {
    color: hsl(var(--text-accent));
    font-size: 0.9rem;
  }
}
</style>
