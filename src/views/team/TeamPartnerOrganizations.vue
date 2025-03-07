<script setup lang="ts">
import { useHead } from "@unhead/vue";
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import AppSection from "@/components/shared/AppSection.vue";

useHead({ title: "Organisations partenaires - Green Code Initiative" });
</script>

<template>
  <AppSection title="De nombreuses organisations s'impliquent sur Creedengo">
    <PartnerOrganizationList :featured="false" />
  </AppSection>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 50px;
}
</style>
