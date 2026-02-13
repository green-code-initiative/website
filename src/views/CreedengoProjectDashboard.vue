<template>
  <div class="project-detail">
    <section class="hero-section">
      <div class="hero-content">
        <img 
          src="/img/projects/creedengo.svg" 
          alt="Logo Creedengo Dashboard" 
          class="project-logo"
        />
        <h1>Creedengo Dashboard</h1>
        <p class="hero-description">
          Tableau de bord de visualisation des métriques d'éco-conception pour prioriser les améliorations et prévenir les régressions
        </p>
        <div class="hero-actions">
          <a 
            href="https://github.com/green-code-initiative/creedengo-dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            class="github-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Voir sur GitHub
          </a>
          <a 
            href="https://green-code-initiative.github.io/creedengo-dashboard/"
            target="_blank" 
            rel="noopener noreferrer"
            class="demo-button"
          >
            Voir le design system →
          </a>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="content-container">
        <div class="intro-section">
          <h2>Anciennement Greesight, développé par Capgemini</h2>
          <p class="intro-text">
            Creedengo Dashboard est né du projet Greesight de Capgemini, dans le cadre de leurs initiatives de modernisation 
            applicative et cloud responsable. Ce tableau de bord permet de visualiser l'impact des pratiques d'éco-conception, 
            d'aider les équipes à prioriser leurs actions et de prévenir l'introduction de nouvelles régressions environnementales.
          </p>
          <div class="reference-links">
            <a 
              href="https://www.capgemini.com/fr-fr/perspectives/blog/cloud-et-green-it/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="reference-link"
            >
              📖 Article Capgemini : Cloud et Green IT
            </a>
            <a 
              href="https://fr.linkedin.com/pulse/modernisation-applicative-cloud-et-num%C3%A9rique-un-trio-pascal" 
              target="_blank" 
              rel="noopener noreferrer"
              class="reference-link"
            >
              📖 Modernisation applicative et numérique responsable
            </a>
          </div>
        </div>

        <div class="features-section">
          <h2>Fonctionnalités principales</h2>
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-icon">📊</div>
              <div class="feature-content">
                <h3>Visualisation des métriques</h3>
                <p>Présentation claire et accessible des métriques d'éco-conception issues des analyses Creedengo</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎯</div>
              <div class="feature-content">
                <h3>Priorisation des actions</h3>
                <p>Aide à la décision pour prioriser les améliorations de code selon leur impact environnemental</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <div class="feature-content">
                <h3>Prévention des régressions</h3>
                <p>Détection précoce des problèmes pour éviter leur introduction en production</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🧩</div>
              <div class="feature-content">
                <h3>Architecture modulaire</h3>
                <p>Widgets web components réutilisables dans différents contextes (IDE, CI/CD, wikis)</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔧</div>
              <div class="feature-content">
                <h3>Catalogue de widgets testables</h3>
                <p>Composants développés et testés individuellement avec Storybook pour une qualité optimale</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌐</div>
              <div class="feature-content">
                <h3>Architecture ouverte</h3>
                <p>Conçu pour s'intégrer dans de multiples environnements et sources de données</p>
              </div>
            </div>
          </div>
        </div>

        <div class="integrations-section">
          <h2>Intégrations disponibles et futures</h2>
          <div class="integration-grid">
            <div class="integration-card available">
              <div class="integration-header">
                <h3>Extension VSCode</h3>
                <span class="status-badge available">Disponible</span>
              </div>
              <p>
                Intégration directe dans Visual Studio Code pour que les développeurs puissent consulter 
                les métriques d'éco-conception sans quitter leur IDE.
              </p>
              <div class="integration-meta">
                <span class="version">Version 0.2.0</span>
                <a 
                  href="https://github.com/green-code-initiative/creedengo-dashboard/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="download-link"
                >
                  Télécharger →
                </a>
              </div>
            </div>

            <div class="integration-card in-progress">
              <div class="integration-header">
                <h3>Plugin SonarQube</h3>
                <span class="status-badge in-progress">En développement</span>
              </div>
              <p>
                Page d'extension SonarQube permettant de visualiser les métriques d'éco-conception 
                directement dans l'interface SonarQube du projet.
              </p>
              <div class="integration-meta">
                <span class="version">Sortie prévue : septembre 2025</span>
              </div>
            </div>

            <div class="integration-card planned">
              <div class="integration-header">
                <h3>Intégrations CI/CD</h3>
                <span class="status-badge planned">Planifié</span>
              </div>
              <p>
                Intégration dans les workflows CI/CD (GitHub, GitLab, Bitbucket, Azure DevOps) 
                pour afficher les métriques dans les Pull/Merge Requests.
              </p>
            </div>

            <div class="integration-card planned">
              <div class="integration-header">
                <h3>Wikis et documentation</h3>
                <span class="status-badge planned">Planifié</span>
              </div>
              <p>
                Widgets intégrables dans les wikis projet (Confluence, GitHub/GitLab, SharePoint) 
                pour sensibiliser les décideurs.
              </p>
            </div>
          </div>
        </div>

        <div class="technical-section">
          <h2>Architecture technique</h2>
          <p class="section-intro">
            Le projet est construit avec une architecture moderne et modulaire permettant une grande flexibilité d'intégration.
          </p>
          <div class="tech-grid">
            <div class="tech-card">
              <h3>Frontend Vue.js</h3>
              <p>Application web construite avec Vue.js, offrant une interface réactive et performante</p>
            </div>
            <div class="tech-card">
              <h3>Web Components</h3>
              <p>Widgets réutilisables sous forme de composants web standards, intégrables partout</p>
            </div>
            <div class="tech-card">
              <h3>Storybook</h3>
              <p>Catalogue de composants testés individuellement pour garantir la qualité et la stabilité</p>
            </div>
            <div class="tech-card">
              <h3>API agnostique</h3>
              <p>Compatible avec différentes sources de données : SonarQube, linters, analyses statiques...</p>
            </div>
          </div>
        </div>

        <div class="contribute-section">
          <h2>Contribuer au projet</h2>
          <p class="section-intro">
            Le projet est en développement actif et recherche activement des contributeurs pour accélérer son évolution.
          </p>
          <div class="contribute-grid">
            <div class="contribute-card">
              <h3>🚀 État du projet</h3>
              <p>
                Le projet est fonctionnel mais encore en phase de développement. L'extension VSCode est disponible 
                en version préliminaire et le plugin SonarQube est en cours de finalisation.
              </p>
            </div>
            <div class="contribute-card">
              <h3>🤝 Rejoignez-nous</h3>
              <p>
                Que vous soyez développeur Vue.js, expert en visualisation de données ou simplement intéressé 
                par l'éco-conception, vos contributions sont les bienvenues !
              </p>
            </div>
            <div class="contribute-card">
              <h3>📚 Documentation</h3>
              <p>
                Consultez le <a href="https://github.com/green-code-initiative/creedengo-dashboard/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">guide de contribution</a> 
                pour démarrer le projet en local et comprendre l'architecture.
              </p>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <h2>Besoin d'aide ou d'informations ?</h2>
          <ContactForm 
            title="Contactez-nous"
            section-id="creedengo-dashboard"
            :individual-options="[
              'Je souhaite contribuer au développement',
              'Je veux intégrer le dashboard dans mon organisation',
              'J\'ai besoin d\'aide pour l\'installation',
              'J\'ai une question technique',
              'Autre sujet'
            ]"
            :organization-options="[
              'Intégration du dashboard dans notre infrastructure',
              'Formation des équipes',
              'Support technique',
              'Partenariat',
              'Autre demande'
            ]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/shared/form/ContactForm.vue'
</script>

<style scoped lang="scss">
.project-detail {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  padding: 2rem 2rem 2.5rem;
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
    height: 150px;
    margin-bottom: 1.5rem;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 280px;
      height: 105px;
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

.github-button,
.demo-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}

.content-section {
  padding: 4rem 2rem;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

.intro-section,
.features-section,
.integrations-section,
.technical-section,
.contribute-section,
.contact-section {
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin: 0 0 1.5rem 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .intro-text,
  .section-intro {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
}

.reference-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.reference-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f0f0f0;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  align-items: start;

  .feature-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .feature-content {
    h3 {
      font-size: 1.125rem;
      color: var(--color-primary);
      margin: 0 0 0.5rem 0;
      text-align: left;
    }

    p {
      margin: 0;
      line-height: 1.6;
      color: #666;
    }
  }
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.integration-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &.available {
    border-color: #4caf50;
  }

  &.in-progress {
    border-color: #ff9800;
  }

  &.planned {
    border-color: #2196f3;
  }

  .integration-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin: 0;
      text-align: left;
    }
  }

  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;

    &.available {
      background: #e8f5e9;
      color: #2e7d32;
    }

    &.in-progress {
      background: #fff3e0;
      color: #ef6c00;
    }

    &.planned {
      background: #e3f2fd;
      color: #1565c0;
    }
  }

  p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    color: #666;
  }

  .integration-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;

    .version {
      font-size: 0.875rem;
      color: #999;
    }

    .download-link {
      color: var(--color-secondary);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--color-secondary);

  h3 {
    font-size: 1.125rem;
    color: var(--color-primary);
    margin: 0 0 0.75rem 0;
    text-align: left;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #555;
  }
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.contribute-card {
  background: #f0f7ff;
  padding: 2rem;
  border-radius: 12px;
  border-top: 4px solid var(--color-primary);

  h3 {
    font-size: 1.125rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
    text-align: left;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #555;

    a {
      color: var(--color-secondary);
      text-decoration: underline;
      font-weight: 600;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
