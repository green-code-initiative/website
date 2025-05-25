<script setup lang="ts">
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import AppButton from "@/components/shared/AppButton.vue";
</script>

<template>
  <section aria-labelledby="featured-organizations-heading">
    <h2 id="featured-organizations-heading">
      De <strong>nombreux acteurs</strong> s'impliquent dans le collectif, dont
      :
    </h2>

    <PartnerOrganizationList :featured="true" />

    <AppButton
      variant="neutral"
      link="/collectif/organisations"
      text="Je découvre tous les partenaires"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
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
