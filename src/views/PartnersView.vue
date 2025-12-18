<script setup lang="ts">
import PartnerLevelList from "@/components/partners/PartnerLevelList.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppSection from "@/components/shared/AppSection.vue";
import Hero from "@/components/global/Hero.vue";
import PdfSlideViewer from "@/components/shared/PdfSlideViewer.vue";
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
    subTitle="Ils nous accompagnent et soutiennent notre mission pour un numérique plus durable"
  >
    <template #actions>
      <AppButton
        variant="primary"
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
        <img src="/img/partners/platinium-level.png" alt="Platinum" class="level-badge-full" />
        <h2 class="level-title-full heading-2">Platinum</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="platinum" type="partner" :show-badge="false" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="platinum" type="sponsor" :show-badge="false" />
        </div>
      </div>
    </div>

    <!-- Niveau Or -->
    <div class="level-section">
      <div class="level-header-full">
        <img src="/img/partners/gold-level.png" alt="Or" class="level-badge-full" />
        <h2 class="level-title-full heading-2">Or</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="gold" type="partner" :show-badge="false" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="gold" type="sponsor" :show-badge="false" />
        </div>
      </div>
    </div>

    <!-- Niveau Argent -->
    <div class="level-section">
      <div class="level-header-full">
        <img src="/img/partners/silver-level.png" alt="Argent" class="level-badge-full" />
        <h2 class="level-title-full heading-2">Argent</h2>
      </div>
      <div class="type-columns">
        <div class="type-column partner-column">
          <h3 class="column-label">Partenaires</h3>
          <PartnerLevelList level="silver" type="partner" :show-badge="false" />
        </div>
        <div class="type-column sponsor-column">
          <h3 class="column-label">Sponsors</h3>
          <PartnerLevelList level="silver" type="sponsor" :show-badge="false" />
        </div>
      </div>
    </div>
  </div>
  
  <AppSection title="Notre offre partenaire et sponsoring" id="offre-partenaire">
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
      <PdfSlideViewer :pdf-url="pdfPath" />
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
    margin-bottom: 2rem;
  }
}

.level-header-full {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius, 8px) var(--radius, 8px) 0 0;
  margin-bottom: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .level-badge-full {
    width: 60px;
    height: auto;
  }

  .level-title-full {
    margin: 0;
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
    background: linear-gradient(135deg, hsl(var(--primary-50)) 0%, hsl(var(--primary-100)) 100%);
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

.section {
  margin-bottom: 50px;
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
