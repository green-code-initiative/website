<script setup lang="ts">
import CaseStudyForm from "@/components/company/CaseStudyForm.vue";
import RuleCreationProcess from "@/components/company/RuleCreationProcess.vue";
import AppHero from "@/components/global/Hero.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

useHead({ title: "Entreprises - Green Code Initiative" });
</script>

<template>
  <AppHero
    variant="quaternary"
    title="Nous proposons aux organisations la création de règles d'éco-conception logicielle sur-mesure."
    sub-title="En collaborant avec nous, vous réduisez votre impact numérique et contribuez à l'Open Source."
  >
    <template #actions>
      <AppButton
        variant="primary"
        :link="{ path: '/', hash: '#contact' }"
        text="Demande de contact"
      />
      <AppButton
        variant="black"
        link="#client-case"
        text="Recevez le cas client Société Générale"
      />
    </template>
  </AppHero>

  <AppSection
    title="Notre offre"
    sub-title="Nous créons des extensions SonarQube pour analyser votre code et vous permettre de réduire son impact."
  />

  <RuleCreationProcess />

  <AppSection
    title="Recevez notre cas client Société Générale par mail"
    id="client-case"
  >
    <CaseStudyForm />
  </AppSection>
</template>
