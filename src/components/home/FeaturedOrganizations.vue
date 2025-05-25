<script setup lang="ts">
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import AppButton from "@/components/shared/AppButton.vue";
</script>

<template>
  <div class="featured-organizations">
    <h2>
      De <strong>nombreux acteurs</strong> s'impliquent dans le collectif, dont
      :
    </h2>

    <PartnerOrganizationList :featured="true" />

    <AppButton
      variant="neutral"
      link="/collectif/organisations"
      text="Je découvre tous les partenaires"
    />
  </div>
</template>

<style lang="scss" scoped>
.featured-organizations {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0 6rem;
  text-align: center;

  h2 {
    color: hsl(var(--text-accent));
    font-size: 1.5rem;
    font-weight: bold;

    strong {
      color: hsl(var(--text-neutral));
    }
  }
}
</style>
