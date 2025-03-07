<script setup lang="ts">
import { useHead } from "@unhead/vue";
import contributors from "@/assets/data/contributors.json";
import coreMembers from "@/assets/data/core-members.json";
import MemberList from "@/components/collective/MemberList.vue";
import AppSection from "@/components/shared/AppSection.vue";

useHead({ title: "Membres contributeurs - Green Code Initiative" });
</script>

<template>
  <AppSection title="Core team" sub-title="L'équipe qui pilote Creedengo">
    <MemberList :members="coreMembers" />
  </AppSection>

  <AppSection title="Contributrices et contributeurs" background-color="grey">
    <MemberList :members="contributors" />
  </AppSection>
</template>
