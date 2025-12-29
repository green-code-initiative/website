<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";

const props = defineProps<{
  level: "platinum" | "gold" | "silver";
  type: "partner" | "sponsor";
}>();

const filteredOrganizations = organizations.filter(
  (org) =>
    org.level === props.level && org.type && org.type.includes(props.type)
);
</script>

<template>
  <div class="partner-level-list" :class="`level-${level}`">
    <div class="partners-grid" :class="`grid-${level}`">
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
  </div>
</template>

<style scoped lang="scss">
.partner-level-list {
  width: 100%;
  margin-bottom: 2rem;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  &.grid-platinum {
    gap: 3.5rem;
  }

  &.grid-gold {
    gap: 3rem;
  }

  &.grid-silver {
    gap: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .partners-grid {
    gap: 2rem;

    &.grid-platinum,
    &.grid-gold,
    &.grid-silver {
      gap: 2rem;
    }
  }
}
</style>
