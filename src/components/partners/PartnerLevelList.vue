<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";
import { computed } from "vue";

const props = defineProps<{
  level: "platinum" | "gold" | "silver";
}>();

const filteredOrganizations = computed(() =>
  organizations
    .filter((org) => org.level === props.level)
    .sort((org1, org2) => org1.name.localeCompare(org2.name, "fr")),
);
</script>

<template>
  <ul class="list" :class="{ featured: level === 'platinum' }">
    <li v-for="organization in filteredOrganizations" :key="organization.name">
      <PartnerOrganization
        :name="organization.name"
        :logo="{
          filename: organization.img,
          width: organization.width,
          height: organization.height,
        }"
        :variant="level === 'platinum' ? 'featured' : 'card'"
        :role-label="
          organization.type
            .map((type) => (type === 'partner' ? 'Partenaire' : 'Sponsor'))
            .join(' · ')
        "
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  list-style: none;

  &.featured {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 380px) {
    &,
    &.featured {
      grid-template-columns: 1fr;
    }
  }
}
</style>
