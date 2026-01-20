<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";

type Organization = Pick<
  (typeof organizations)[0],
  "img" | "name" | "width" | "height"
>;

const premiumLevelList = new Set(["platinum", "gold"]);

const props = defineProps<{
  customList?: Organization[];
  premiumLevels?: boolean;
}>();

const filteredOrganizations =
  props.customList ??
  (props.premiumLevels
    ? organizations
        .filter((organization) => premiumLevelList.has(organization.level))
        .sort((organization1, organization2) =>
          organization1.name.localeCompare(organization2.name),
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
  gap: 2.1rem;
  max-width: 1280px;
  width: 100%;
}
</style>
