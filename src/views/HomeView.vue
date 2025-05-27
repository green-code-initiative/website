<script setup lang="ts">
import { event as eventBanner } from "@/assets/data/banners.json";
import ContactForm from "@/components/home/ContactForm.vue";
import CreedengoIntro from "@/components/home/CreedengoIntro.vue";
import FeaturedOrganizations from "@/components/home/FeaturedOrganizations.vue";
import HomeHero from "@/components/home/HomeHero.vue";
import RuleProcess from "@/components/home/RuleProcess.vue";
import AppEventBanner from "@/components/shared/AppEventBanner.vue";
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

  <RuleProcess />

  <ContactForm />
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
