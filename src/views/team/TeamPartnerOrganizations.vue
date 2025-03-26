<script setup lang="ts">
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "Organisations partenaires - Green Code Initiative",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les organisations qui s'impliquent dans notre collectif.",
    },
  ],
});
</script>

<template>
  <AppSection title="De nombreux acteurs s'impliquent dans le collectif">
    <PartnerOrganizationList :featured="false" />
  </AppSection>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 50px;
}
</style>
