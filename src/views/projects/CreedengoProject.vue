<script setup lang="ts">
import RuleProcess from "@/components/home/RuleProcess.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
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
  <AppSection
    title="Un outil basé sur notre référentiel de règles d'éco-conception logicielle"
    container
  >
    <div class="feature-grid">
      <AppCard>
        <h3>🔍 Identification des défauts</h3>
        <p>
          Une collection de plugins pour <strong>SonarQube</strong> qui analyse
          votre base de code et identifie les structures problématiques.
        </p>
      </AppCard>

      <AppCard variant="primary">
        <h3>🌿 Impact écologique</h3>
        <p>
          Aide à limiter l'<strong>impact environnemental</strong> de vos
          programmes en détectant les surconsommations d'énergie et de
          ressources.
        </p>
      </AppCard>

      <AppCard>
        <h3>💝 Open Source et Gratuit</h3>
        <p>
          Complètement <strong>open-source</strong> et gratuit, accessible à
          tous les développeurs.
        </p>
      </AppCard>

      <AppCard>
        <h3>👥 Force du collectif</h3>
        <p>
          Propulsé par les contributions d'<strong>entreprises</strong>, de
          <strong>laboratoires</strong> et d'<strong>individuels</strong>.
        </p>
      </AppCard>
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
          :href="`https://github.com/green-code-initiative/${tech.repositoryName}`"
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
}
</style>
