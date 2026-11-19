<script setup lang="ts">
import BracesIcon from "@/assets/icons/braces.svg?component";
import HeartHandshakeIcon from "@/assets/icons/heart_handshake.svg?component";
import LeafIcon from "@/assets/icons/leaf.svg?component";
import SearchIcon from "@/assets/icons/search.svg?component";
import RuleProcess from "@/components/home/RuleProcess.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppFeatureCard from "@/components/shared/AppFeatureCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";

const technologies = [
  { name: "Java", repositoryName: "creedengo-java" },
  { name: "JS / TS", repositoryName: "creedengo-javascript" },
  { name: "PHP", repositoryName: "creedengo-php" },
  { name: "Python", repositoryName: "creedengo-python" },
  { name: "C#", repositoryName: "creedengo-csharp" },
  { name: "Android", repositoryName: "ecoCode-android" },
  { name: "iOS", repositoryName: "creedengo-ios" },
] as const;
</script>

<template>
  <AppSection title="L'éco-conception au cœur de l'analyse de code" container>
    <div class="feature-grid">
      <AppFeatureCard title="Identification des défauts" :icon="SearchIcon">
        Une collection de plugins pour <strong>SonarQube</strong> qui analyse
        votre base de code et identifie les structures problématiques.
      </AppFeatureCard>

      <AppFeatureCard title="Impact écologique" :icon="LeafIcon">
        Aide à limiter l'<strong>impact environnemental</strong> de vos
        programmes en détectant les surconsommations d'énergie et de ressources.
      </AppFeatureCard>

      <AppFeatureCard title="Open Source et gratuit" :icon="BracesIcon">
        Complètement <strong>open-source</strong> et gratuit, accessible à tous
        les développeurs.
      </AppFeatureCard>

      <AppFeatureCard title="Force du collectif" :icon="HeartHandshakeIcon">
        Propulsé par les contributions d'<strong>entreprises</strong>, de
        <strong>laboratoires</strong> et d'<strong>individuels</strong>.
      </AppFeatureCard>
    </div>
  </AppSection>

  <AppSection
    title="Technologies supportées"
    sub-title="Creedengo s'adapte à vos technologies préférées avec 7 langages supportés :"
    container
  >
    <div class="tech-grid">
      <AppCard v-for="tech in technologies" :key="tech.name" align="center">
        <h3>{{ tech.name }}</h3>
        <AppButton
          :text="`Je découvre →`"
          variant="secondary"
          :link="`https://github.com/green-code-initiative/${tech.repositoryName}`"
          type="external_link"
        />
      </AppCard>
    </div>
  </AppSection>

  <RuleProcess />

  <ContactForm
    title="Une question sur Creedengo ?"
    section-id="contact-creedengo"
    :individual-options="[
      'Je souhaite contribuer à Creedengo',
      'Je souhaite des informations sur Creedengo',
    ]"
    :organization-options="[
      'Je souhaite développer des règles pour mon organisation',
      'Je souhaite contribuer à Creedengo (mise à contribution de collaborateurs)',
      'Je souhaite soutenir Creedengo financièrement',
      'Je souhaite des informations sur Creedengo',
    ]"
  />
</template>

<style scoped lang="scss">
.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
