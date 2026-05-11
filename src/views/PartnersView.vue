<script setup lang="ts">
import GoldBarsIcon from "@/assets/icons/gold_bars.svg";
import PartnerLevelList from "@/components/partners/PartnerLevelList.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppHero from "@/components/shared/AppHero.vue";
import AppPdfViewer from "@/components/shared/AppPdfViewer.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

const pdfPath = "/partenariat-sponsoring-2026.pdf";

useHead({
  title: "Nos partenaires - Green Code Initiative",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les organisations partenaires qui soutiennent la Green Code Initiative.",
    },
  ],
});
</script>

<template>
  <AppHero
    title="Nos partenaires et sponsors"
    sub-title="Ils nous accompagnent et soutiennent notre mission pour un numérique plus durable"
    variant="primary-fill"
  >
    <template #actions>
      <AppButton
        variant="secondary"
        link="#offre-partenaire"
        text="Devenir partenaire"
      />
      <AppButton
        variant="black"
        link="#offre-partenaire"
        text="Devenir sponsor"
      />
    </template>
  </AppHero>

  <div class="partners-content">
    <!-- Niveau Platinum -->
    <div class="level-section">
      <div class="level-header-full">
        <GoldBarsIcon
          width="48"
          height="48"
          color="hsl(var(--secondary-500))"
        />
        <h2>Platinum</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="platinum" type="partner" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="platinum" type="sponsor" />
        </div>
      </div>
    </div>

    <!-- Niveau Or -->
    <div class="level-section">
      <div class="level-header-full">
        <GoldBarsIcon width="48" height="48" color="rgb(225, 180, 60)" />
        <h2>Or</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="gold" type="partner" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="gold" type="sponsor" />
        </div>
      </div>
    </div>

    <!-- Niveau Argent -->
    <div class="level-section">
      <div class="level-header-full">
        <GoldBarsIcon width="48" height="48" color="hsl(var(--neutral-500))" />
        <h2>Argent</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="silver" type="partner" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="silver" type="sponsor" />
        </div>
      </div>
    </div>
  </div>

  <AppSection
    title="Notre offre partenaire et sponsoring"
    id="offre-partenaire"
  >
    <div class="pdf-container">
      <div class="pdf-actions">
        <AppButton
          variant="primary"
          :link="pdfPath"
          text="Télécharger le PDF"
          target="_blank"
          download
        />
      </div>
      <AppPdfViewer :pdf-url="pdfPath" />
    </div>
  </AppSection>
</template>

<style lang="scss" scoped>
.partners-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
}

.level-section {
  margin: 0 1rem;
  box-shadow: var(--shadow-border-small);
  border-radius: var(--radius);
  background: hsl(var(--card));
  overflow: hidden;
}

.level-header-full {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid hsl(var(--surface-accent));

  h2 {
    font-size: 1.75rem;
    font-weight: 800;
  }
}

.type-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.type-column {
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;

  &.partner-column {
    background: hsl(var(--secondary-300) / var(--gradient-opacity));
    border-right: 1px solid hsl(var(--surface-accent));
  }

  &.sponsor-column {
    background: hsl(var(--primary-300) / var(--gradient-opacity));
  }

  .column-label {
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
}

.pdf-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  gap: 2rem;

  .pdf-actions {
    display: flex;
    justify-content: center;
  }
}
</style>
