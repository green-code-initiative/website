<script setup lang="ts">
import GoldBarsIcon from "@/assets/icons/gold_bars.svg";
import Hero from "@/components/global/Hero.vue";
import PartnerLevelList from "@/components/partners/PartnerLevelList.vue";
import AppButton from "@/components/shared/AppButton.vue";
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
  <Hero
    variant="secondary"
    title="Nos partenaires et sponsors"
    sub-title="Ils nous accompagnent et soutiennent notre mission pour un numérique plus durable"
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
  </Hero>

  <div class="partners-content">
    <!-- Niveau Platinum -->
    <div class="level-section">
      <div class="level-header-full">
        <GoldBarsIcon width="64" height="64" color="rgb(82, 140, 233)" />
        <h2 class="heading-2">Platinum</h2>
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
        <GoldBarsIcon width="64" height="64" color="rgb(225, 180, 60)" />
        <h2 class="heading-2">Or</h2>
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
        <GoldBarsIcon width="64" height="64" color="rgb(192, 192, 192)" />
        <h2 class="heading-2">Argent</h2>
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
  padding: 3rem 0;
}

.intro-text {
  text-align: center;
  font-size: 1.125rem;
  color: var(--color-text-secondary, #666);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.level-section {
  margin: 0 20px 4rem 20px;
  width: calc(100% - 40px);

  &:last-child {
    margin-bottom: 0;
  }
}

.level-header-full {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius, 8px) var(--radius, 8px) 0 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;

  &.partner-column {
    background: linear-gradient(135deg, #f0f7ff 0%, #e6f2ff 100%);
    border-radius: 0 0 0 var(--radius, 8px);

    @media screen and (max-width: 992px) {
      border-radius: 0;
    }
  }

  &.sponsor-column {
    background: linear-gradient(
      135deg,
      hsl(var(--primary-50)) 0%,
      hsl(var(--primary-100)) 100%
    );
    border-radius: 0 0 var(--radius, 8px) 0;

    @media screen and (max-width: 992px) {
      border-radius: 0 0 var(--radius, 8px) var(--radius, 8px);
    }
  }
}

.column-label {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary, #333);
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pdf-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.pdf-actions {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
