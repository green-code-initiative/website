<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";

const props = defineProps<{
  level: "platinum" | "gold" | "silver";
  type: "partner" | "sponsor";
}>();

const filteredOrganizations = organizations
  .filter(
    (org) =>
      org.level === props.level && org.type && org.type.includes(props.type),
  )
  .sort((org1, org2) => org1.name.localeCompare(org2.name));
</script>

<template>
  <div class="list">
    <PartnerOrganization
      v-for="organization in filteredOrganizations"
      :key="organization.name"
      :name="organization.name"
      :logo="{
        filename: organization.img,
        width: organization.width,
        height: organization.height,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
