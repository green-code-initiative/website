<script setup lang="ts">
import ChartLineIcon from "@/assets/icons/chart_line.svg?component";
import TargetIcon from "@/assets/icons/target.svg?component";
import WrenchIcon from "@/assets/icons/wrench.svg?component";
import AppCard from "@/components/shared/AppCard.vue";
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
      <AppCard padding="comfortable" class="objective-card">
        <TargetIcon width="64" height="64" />
        <p class="title">Sensibilisation</p>
        <p>
          Permet aux équipes de développement de prendre en compte l'impact
          environnemental pendant le développement et promouvoir les bonnes
          pratiques d'éco-conception et d'accessibilité.
        </p>
      </AppCard>
      <AppCard padding="comfortable" class="objective-card">
        <WrenchIcon width="64" height="64" />
        <p class="title">Support à l'implémentation</p>
        <p>
          Aide les développeurs à implémenter les bonnes pratiques grâce à
          l'analyse statique (SonarQube + EcoCode) et dynamique (GreenIT,
          Lighthouse, W3C).
        </p>
      </AppCard>
      <AppCard padding="comfortable" class="objective-card">
        <ChartLineIcon width="64" height="64" />
        <p class="title">Monitoring continu</p>
        <p>
          Fournit une solution de suivi environnemental permettant
          l'amélioration continue des équipes de livraison.
        </p>
      </AppCard>
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

  <AppSection title="Architecture technique" container>
    <div class="architecture-grid">
      <AppCard class="arch-card">
        <h3>Backend containerisé</h3>
        <ul>
          <li>API Node.js</li>
          <li>Exécution des analyses GreenIT, Lighthouse et W3C</li>
          <li>Stockage des audits dans MongoDB</li>
          <li>Récupération via appels API</li>
        </ul>
      </AppCard>

      <AppCard class="arch-card">
        <h3>Intégration SonarQube</h3>
        <ul>
          <li>Configuration et récupération des rapports d'audit</li>
          <li>Lancement automatique lors de l'analyse SonarQube</li>
          <li>Règles d'éco-conception via plugins Creedengo</li>
        </ul>
      </AppCard>

      <AppCard class="arch-card">
        <h3>Infrastructure requise</h3>
        <ul>
          <li>Docker Registry pour le stockage</li>
          <li>Serveur Docker (RAM > 4GB pour Lighthouse)</li>
          <li>Base de données MongoDB</li>
          <li>Réseau privé pour la sécurité des données</li>
        </ul>
      </AppCard>
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

  .objective-card {
    .title {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
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

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  .arch-card {
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    ul {
      margin: 0;
      padding-left: 1.5rem;

      li {
        line-height: 1.8;
        color: hsl(var(--text-accent));
      }
    }
  }
}
</style>
