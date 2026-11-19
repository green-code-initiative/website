<script setup lang="ts">
import PartnerLevelList from "@/components/partners/PartnerLevelList.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppHero from "@/components/shared/AppHero.vue";
import AppSection from "@/components/shared/AppSection.vue";
import { useHead } from "@unhead/vue";

const pdfPath = "/partenariat-sponsoring-2026.pdf";
const levels = [
  { value: "platinum", label: "Platinum" },
  { value: "gold", label: "Or" },
  { value: "silver", label: "Argent" },
] as const;

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
    title="Ensemble, faisons grandir un numérique plus durable."
    sub-title="Les organisations qui soutiennent la mission de la Green Code Initiative."
    variant="primary-fill"
  >
    <template #icon>
      <p class="eyebrow">Nos partenaires et sponsors</p>
    </template>
    <template #actions>
      <AppButton
        variant="secondary"
        link="#offre-partenaire"
        text="Rejoindre nos partenaires"
      />
      <a class="text-link" href="#nos-partenaires">
        Découvrir le réseau <span aria-hidden="true">↓</span>
      </a>
    </template>
  </AppHero>

  <AppSection
    id="nos-partenaires"
    class="network-section"
    title="Ils s’engagent à nos côtés"
    container
  >
    <div class="partners-content">
      <section
        v-for="level in levels"
        :key="level.value"
        class="level-section"
        :class="level.value"
        :aria-labelledby="`level-${level.value}`"
      >
        <div class="level-header">
          <h3 :id="`level-${level.value}`">{{ level.label }}</h3>
          <span class="level-divider" aria-hidden="true" />
        </div>
        <PartnerLevelList :level="level.value" />
      </section>
    </div>
  </AppSection>

  <AppSection id="offre-partenaire" class="offer-section" container>
    <AppCard variant="secondary" padding="comfortable" align="center">
      <p class="eyebrow">Rejoignez le mouvement</p>
      <h2 class="offer-title">Votre organisation a sa place ici.</h2>
      <p class="offer-description">
        Découvrez les modalités de partenariat et de sponsoring.
      </p>
      <AppButton
        variant="neutral"
        type="external_link"
        :link="pdfPath"
        text="Consulter l’offre"
        rel="noopener"
        aria-label="Consulter l’offre (PDF, nouvel onglet)"
      />
    </AppCard>
  </AppSection>
</template>

<style lang="scss" scoped>
.eyebrow {
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.text-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 0.25em;

  &:hover {
    text-decoration-thickness: 2px;
  }
}

.network-section,
.offer-section {
  padding-block: 4rem;
  scroll-margin-top: 6rem;
}

.partners-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 1rem;
}

.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    padding: 0.5rem 1rem;
    border-radius: 100px;
    background: hsl(var(--surface));
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.platinum .level-header h3 {
  color: hsl(var(--text-secondary));
  background: hsl(var(--secondary-300) / var(--gradient-opacity));
}

.gold .level-header h3 {
  background: hsl(var(--warning-300));
}

.level-divider {
  flex: 1;
  height: 1px;
  background: hsl(var(--surface-accent));
}

.offer-section {
  padding-top: 0;
}

.offer-title {
  max-width: 700px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  line-height: 1.2;
}

.offer-description {
  max-width: 600px;
  font-size: 1.125rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .network-section,
  .offer-section {
    padding-block: 2.5rem;
  }

  .offer-section {
    padding-top: 0;
  }

  .partners-content {
    gap: 2rem;
  }
}
</style>
