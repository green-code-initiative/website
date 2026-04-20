<script setup lang="ts">
import contributors from "@/assets/data/contributors.json";
import coreMembers from "@/assets/data/core-members.json";
import MemberList from "@/components/collective/MemberList.vue";
import AppHero from "@/components/shared/AppHero.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "Notre collectif - Green Code Initiative",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les membres du collectif qui contribuent à rendre le numérique plus durable.",
    },
  ],
});
</script>

<template>
  <AppHero title="Notre collectif" />

  <AppSection title="Core team">
    <MemberList :members="coreMembers" />
  </AppSection>

  <AppSection title="Contributrices et contributeurs" background-color="grey">
    <MemberList :members="contributors" />
  </AppSection>
</template>
