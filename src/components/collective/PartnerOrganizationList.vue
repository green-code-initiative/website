<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";

interface OrganizationBase {
  img: string;
  name: string;
  width: number;
  height: number;
}

const props = defineProps<{
  customList?: OrganizationBase[];
  featured?: boolean;
}>();

const filteredOrganizations =
  props.customList ??
  (props.featured
    ? organizations
        .filter((organization) => organization.featured)
        .sort(
          (organization1, organization2) =>
            organization1.featured! - organization2.featured!
        )
    : organizations);
</script>

<template>
  <div class="partner-organization-list">
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
.partner-organization-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
  gap: 2.5rem;
  max-width: 1140px;
  width: 100%;
}
</style>
