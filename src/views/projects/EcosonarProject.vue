<script setup lang="ts">
import ChartLineIcon from "@/assets/icons/chart_line.svg?component";
import TargetIcon from "@/assets/icons/target.svg?component";
import WrenchIcon from "@/assets/icons/wrench.svg?component";
import AppCard from "@/components/shared/AppCard.vue";
import AppFeatureCard from "@/components/shared/AppFeatureCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
</script>

<template>
  <AppSection
    title="Une solution complète de monitoring environnemental"
    sub-title="EcoSonar est une plateforme d'audit qui intègre plusieurs outils
        d'analyse pour mesurer et améliorer continuellement l'impact
        environnemental de vos applications web."
    container
  >
    <div class="objectives-grid">
      <AppFeatureCard title="Sensibilisation" :icon="TargetIcon">
        Pensez éco-conception et accessibilité dès le développement.
      </AppFeatureCard>
      <AppFeatureCard title="Support à l'implémentation" :icon="WrenchIcon">
        Repérez les points à corriger grâce aux analyses du code et du site.
      </AppFeatureCard>
      <AppFeatureCard title="Monitoring continu" :icon="ChartLineIcon">
        Suivez votre impact environnemental de version en version.
      </AppFeatureCard>
    </div>
  </AppSection>

  <AppSection title="Outils d'audit intégrés" container>
    <div class="tools-list">
      <AppCard class="tool-card">
        <h3>🌱 GreenIT-Analysis / EcoIndex</h3>
        <p>
          Mesure l'empreinte environnementale basée sur la complexité du DOM, le
          poids des données transférées et le nombre de requêtes HTTP. Fournit
          un score sur 100 et une notation de A à G.
        </p>
      </AppCard>

      <AppCard class="tool-card">
        <h3>⚡ Google Lighthouse</h3>
        <p>
          Outil open-source automatisé pour auditer la performance,
          l'accessibilité et les bonnes pratiques. Produit des rapports
          JSON/HTML détaillés.
        </p>
      </AppCard>

      <AppCard class="tool-card">
        <h3>✓ W3C Validator</h3>
        <p>
          Valide les documents web pour l'assurance qualité HTML et la
          conformité RGAA (critère 8.2) en matière d'accessibilité. Optimise les
          ressources grâce à un formatage approprié.
        </p>
      </AppCard>

      <AppCard class="tool-card">
        <h3>💻 Creedengo (SonarQube)</h3>
        <p>
          Plugin SonarQube avec des règles de codage vert pour réduire
          l'utilisation de RAM/CPU et détecter les problèmes d'éco-conception au
          niveau du code.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection title="Architecture technique" background-color="grey" container>
    <div class="architecture-spec">
      <div class="architecture-row">
        <h3>Backend containerisé</h3>
        <ul>
          <li>API Node.js</li>
          <li>Exécution des analyses GreenIT, Lighthouse et W3C</li>
          <li>Stockage des audits dans MongoDB</li>
          <li>Récupération via appels API</li>
        </ul>
      </div>

      <div class="architecture-row">
        <h3>Intégration SonarQube</h3>
        <ul>
          <li>Configuration et récupération des rapports d'audit</li>
          <li>Lancement automatique lors de l'analyse SonarQube</li>
          <li>Règles d'éco-conception via plugins Creedengo</li>
        </ul>
      </div>

      <div class="architecture-row">
        <h3>Infrastructure requise</h3>
        <ul>
          <li>Docker Registry pour le stockage</li>
          <li>Serveur Docker (RAM > 4GB pour Lighthouse)</li>
          <li>Base de données MongoDB</li>
          <li>Réseau privé pour la sécurité des données</li>
        </ul>
      </div>
    </div>
  </AppSection>

  <ContactForm
    title="Une question sur EcoSonar ?"
    section-id="contact-ecosonar"
    :individual-options="[
      'Je souhaite contribuer à EcoSonar',
      'Je souhaite des informations sur EcoSonar',
    ]"
    :organization-options="[
      'Je souhaite déployer EcoSonar dans mon organisation',
      'Je souhaite contribuer à EcoSonar (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur EcoSonar',
    ]"
  />
</template>

<style scoped lang="scss">
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.tools-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .tool-card {
    background-color: hsl(var(--primary-300) / 0.15);

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
}

.architecture-spec {
  max-width: 56rem;
  margin-inline: auto;
  border-block-end: 1px solid hsl(var(--surface-accent));
}

.architecture-row {
  display: grid;
  gap: 0.75rem;
  padding-block: 1.25rem;
  border-block-start: 1px solid hsl(var(--surface-accent));

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 2rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 800;
  }

  ul {
    padding-inline-start: 1.25rem;
    color: hsl(var(--text-accent));
    line-height: 1.6;
  }

  li {
    overflow-wrap: anywhere;
  }
}
</style>
