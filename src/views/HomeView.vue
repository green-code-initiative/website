<script setup lang="ts">
import { event as eventBanner } from "@/assets/data/banners.json";
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import ContactForm from "@/components/home/ContactForm.vue";
import CreedengoIntro from "@/components/home/CreedengoIntro.vue";
import HomeHero from "@/components/home/HomeHero.vue";
import RuleProcess from "@/components/home/RuleProcess.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppEventBanner from "@/components/shared/AppEventBanner.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

useHead({
  title:
    "Green Code Initiative : réduisons l'empreinte écologique de nos logiciels",
});
</script>

<template>
  <HomeHero />

  <AppEventBanner
    v-if="eventBanner.enable"
    class="event-banner-container"
    v-bind="eventBanner"
  />

  <CreedengoIntro />

  <RuleProcess />

  <AppSection
    title="Creedengo est rendu possible grâce aux nombreux acteurs impliqués"
    sub-title="Quelques structures partenaires :"
  >
    <PartnerOrganizationList :featured="true" />
    <div class="block-button-section-1">
      <AppButton
        variant="secondary"
        link="/collectif/organisations"
        text="Toutes les entreprises partenaires"
      />
      <AppButton
        variant="secondary"
        link="/collectif/membres"
        text="Tous nos membres contributeurs"
      />
    </div>
  </AppSection>

  <ContactForm />
</template>

<style lang="scss" scoped>
.block-button-section-1 {
  width: 100%;
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.event-banner-container {
  justify-self: center;
  margin: -3rem auto 4rem;

  @media screen and (max-width: 768px) {
    margin: -3rem 1rem 4rem;
  }
}

@media screen and (max-width: 920px) {
  .block-button-section-1 {
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.5rem;
  }
}
</style>
