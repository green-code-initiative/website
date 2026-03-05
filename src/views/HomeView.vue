<script setup lang="ts">
import { event as eventBanner } from "@/assets/data/banners.json";
import CreedengoIntro from "@/components/home/CreedengoIntro.vue";
import FeaturedOrganizations from "@/components/home/FeaturedOrganizations.vue";
import HomeHero from "@/components/home/HomeHero.vue";
import AppEventBanner from "@/components/shared/AppEventBanner.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
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

  <FeaturedOrganizations />

  <CreedengoIntro />

  <ContactForm
    title="On discute ?"
    :individual-options="[
      'Je souhaite contribuer aux projets du collectif',
      'Je souhaite des informations sur le collectif et ses projets',
    ]"
    :organization-options="[
      'Je souhaite développer des règles pour mon organisation',
      'Je souhaite contribuer aux projets du collectif (mise à contribution de collaborateurs)',
      'Je souhaite soutenir le collectif financièrement',
      'Je souhaite des informations sur le collectif et ses projets',
    ]"
  />
</template>

<style lang="scss" scoped>
.event-banner-container {
  justify-self: center;
  margin: -3rem auto 4rem;

  @media screen and (max-width: 768px) {
    margin: -3rem 1rem 4rem;
  }
}
</style>
