<template>
  <div class="project-detail">
    <section class="hero-section">
      <div class="hero-content">
        <img
          src="/img/projects/ecosonar.webp"
          alt="Logo EcoSonar"
          class="project-logo"
        />
        <h1>EcoSonar</h1>
        <p class="hero-description">
          Outil d'audit éco-conception combinant analyse statique et dynamique
          pour réduire l'impact environnemental des applications web
        </p>
        <div class="hero-actions">
          <AppButton
            text="Voir sur GitHub"
            variant="primary"
            type="external_link"
            link="https://github.com/green-code-initiative/EcoSonar"
          />
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="content-container">
        <div class="intro-section">
          <h2>Une solution complète de monitoring environnemental</h2>
          <p class="intro-text">
            EcoSonar est une plateforme d'audit qui intègre plusieurs outils
            d'analyse pour mesurer et améliorer continuellement l'impact
            environnemental de vos applications web.
          </p>

          <div class="objectives-grid">
            <div class="objective-card">
              <div class="icon">🎯</div>
              <h3>Sensibilisation</h3>
              <p>
                Permet aux équipes de développement de prendre en compte
                l'impact environnemental pendant le développement et promouvoir
                les bonnes pratiques d'éco-conception et d'accessibilité.
              </p>
            </div>
            <div class="objective-card">
              <div class="icon">🛠️</div>
              <h3>Support à l'implémentation</h3>
              <p>
                Aide les développeurs à implémenter les bonnes pratiques grâce à
                l'analyse statique (SonarQube + EcoCode) et dynamique (GreenIT,
                Lighthouse, W3C).
              </p>
            </div>
            <div class="objective-card">
              <div class="icon">📊</div>
              <h3>Monitoring continu</h3>
              <p>
                Fournit une solution de suivi environnemental permettant
                l'amélioration continue des équipes de livraison.
              </p>
            </div>
          </div>
        </div>

        <div class="tools-section">
          <h2>Outils d'audit intégrés</h2>

          <div class="tools-list">
            <div class="tool-card">
              <h3>🌱 GreenIT-Analysis / EcoIndex</h3>
              <p>
                Mesure l'empreinte environnementale basée sur la complexité du
                DOM, le poids des données transférées et le nombre de requêtes
                HTTP. Fournit un score sur 100 et une notation de A à G.
              </p>
            </div>

            <div class="tool-card">
              <h3>⚡ Google Lighthouse</h3>
              <p>
                Outil open-source automatisé pour auditer la performance,
                l'accessibilité et les bonnes pratiques. Produit des rapports
                JSON/HTML détaillés.
              </p>
            </div>

            <div class="tool-card">
              <h3>✓ W3C Validator</h3>
              <p>
                Valide les documents web pour l'assurance qualité HTML et la
                conformité RGAA (critère 8.2) en matière d'accessibilité.
                Optimise les ressources grâce à un formatage approprié.
              </p>
            </div>

            <div class="tool-card">
              <h3>💻 Creedengo (SonarQube)</h3>
              <p>
                Plugin SonarQube avec des règles de codage vert pour réduire
                l'utilisation de RAM/CPU et détecter les problèmes
                d'éco-conception au niveau du code.
              </p>
            </div>
          </div>
        </div>

        <div class="architecture-section">
          <h2>Architecture technique</h2>

          <div class="architecture-grid">
            <div class="arch-card">
              <h3>Backend containerisé</h3>
              <ul>
                <li>API Node.js</li>
                <li>Exécution des analyses GreenIT, Lighthouse et W3C</li>
                <li>Stockage des audits dans MongoDB</li>
                <li>Récupération via appels API</li>
              </ul>
            </div>

            <div class="arch-card">
              <h3>Intégration SonarQube</h3>
              <ul>
                <li>Configuration et récupération des rapports d'audit</li>
                <li>Lancement automatique lors de l'analyse SonarQube</li>
                <li>Règles d'éco-conception via plugins Creedengo</li>
              </ul>
            </div>

            <div class="arch-card">
              <h3>Infrastructure requise</h3>
              <ul>
                <li>Docker Registry pour le stockage</li>
                <li>Serveur Docker (RAM > 4GB pour Lighthouse)</li>
                <li>Base de données MongoDB</li>
                <li>Réseau privé pour la sécurité des données</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="getting-started">
          <h2>Démarrage rapide</h2>
          <div class="install-options">
            <div class="install-card">
              <h3>🐳 Installation Docker Compose</h3>
              <p>
                Solution recommandée pour un déploiement rapide avec toutes les
                dépendances.
              </p>
              <a
                href="https://github.com/green-code-initiative/EcoSonar#docker-compose-installation"
                target="_blank"
                rel="noopener"
              >
                Guide d'installation →
              </a>
            </div>
            <div class="install-card">
              <h3>⚙️ Installation manuelle</h3>
              <p>
                Pour une configuration personnalisée selon vos besoins
                spécifiques.
              </p>
              <a
                href="https://github.com/green-code-initiative/EcoSonar#manual-installation"
                target="_blank"
                rel="noopener"
              >
                Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "EcoSonar - Audit environnemental pour applications web",
  meta: [
    {
      name: "description",
      content:
        "EcoSonar est un outil d'audit éco-conception qui combine analyse statique et dynamique (GreenIT, Lighthouse, W3C, EcoCode) pour mesurer et réduire l'impact environnemental des applications web.",
    },
  ],
});
</script>

<style scoped lang="scss">
.project-detail {
  min-height: 100vh;
}

.hero-section {
  background: hsl(var(--primary-50));
  box-shadow: var(--shadow-border-small);
  padding: 3rem 2rem 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 2rem;
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;

  .project-logo {
    width: 400px;
    height: 100px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    padding: 0.5rem;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 280px;
      height: 70px;
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0 0 1rem 0;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.content-section {
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;

  > div {
    margin-bottom: 4rem;
  }
}

h2 {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.intro-text {
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.objective-card {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.375rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #555;
  }
}

.tools-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tool-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--color-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.375rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
    text-align: left;
  }

  p {
    margin: 0;
    line-height: 1.7;
    color: #555;
  }
}

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.arch-card {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 12px;

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
    text-align: left;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;

    li {
      line-height: 1.8;
      color: #555;
    }
  }
}

.install-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.install-card {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 12px;

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
    text-align: left;
  }

  p {
    margin: 0 0 1.5rem 0;
    line-height: 1.6;
    color: #333;
  }

  a {
    color: var(--color-secondary);
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
