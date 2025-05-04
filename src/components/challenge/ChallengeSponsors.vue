<script setup lang="ts">
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import organizations from "@/assets/data/challenge-organizations.json";
</script>

<template>
  <div class="sponsors">
    <div class="sponsor-list">
      <p>L’événement est <strong>co-organisé</strong> avec</p>
      <a href="https://www.credit-agricole.com" target="_blank">
        <img
          src="@/assets/img/challenge/credit_agricole.webp"
          alt="Crédit Agricole"
          width="360"
          height="107"
        />
      </a>
    </div>
    <div class="sponsor-list">
      <p>De <strong>nombreux partenaires</strong> prennent part au défi :</p>
      <PartnerOrganizationList :custom-list="organizations" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .sponsor-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1.5rem;
      color: hsl(var(--text-accent));
      font-weight: 700;
      text-align: center;

      strong {
        font-weight: 900;
        color: hsl(var(--text-neutral));
      }
    }
  }
}
</style>
