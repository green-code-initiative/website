<script setup lang="ts">
import ContributorProfiles from "@/components/contributor/ContributorProfiles.vue";
import JoinUs from "@/components/contributor/JoinUs.vue";
import Technologies from "@/components/contributor/Technologies.vue";
import GraphStep from "@/components/global/GraphStep.vue";
import AppHero from "@/components/global/Hero.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

useHead({ title: "Contributeur - Green Code Initiative" });
</script>

<template>
  <AppHero
    variant="secondary"
    title="Tu te soucies de réduire l'impact environnemental et social des solutions numériques ?"
    sub-title="Rejoins Creedengo et contribue à faire du numérique un domaine plus durable."
  >
    <template #actions>
      <AppButton
        variant="black"
        link="#joinus"
        text="Je rejoins la communauté"
      />
    </template>
  </AppHero>

  <AppSection title="Creedengo est un projet qui tire sa force du collectif">
    <ContributorProfiles />

    <h3 class="heading-3" style="max-width: none">
      Les technologies couvertes par Creedengo (en attendant d’aller plus loin
      !)
    </h3>
    <Technologies />
  </AppSection>

  <GraphStep />
  <JoinUs id="joinus" />
</template>
