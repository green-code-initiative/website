<template>
  <div class="project-detail">
    <section class="hero-section">
      <div class="hero-content">
        <img 
          src="/img/projects/green-code-rules-icon.svg" 
          alt="Logo Green Code Rules" 
          class="project-logo"
        />
        <h1>Green Code Rules</h1>
        <p class="hero-description">
          Référentiel de bonnes pratiques d'éco-conception logicielle correspondant aux règles des plugins Creedengo
        </p>
        <div class="hero-actions">
          <a 
            href="https://github.com/green-code-initiative/creedengo-rules-specifications" 
            target="_blank" 
            rel="noopener noreferrer"
            class="github-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Voir sur GitHub
          </a>
          <router-link 
            to="/rules"
            class="rules-button"
          >
            Explorer les règles →
          </router-link>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="content-container">
        <div class="intro-section">
          <h2>Le référentiel central des bonnes pratiques d'éco-conception</h2>
          <p class="intro-text">
            Green Code Rules rassemble plus de 100 règles d'éco-conception logicielle développées par le collectif. 
            Ce référentiel sert de base aux plugins Creedengo pour SonarQube et évolue continuellement grâce aux 
            contributions de la communauté.
          </p>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">100+</div>
              <div class="stat-label">Règles d'éco-conception</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">7</div>
              <div class="stat-label">Technologies couvertes</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">6</div>
              <div class="stat-label">Catégories principales</div>
            </div>
          </div>
        </div>

        <div class="categories-section">
          <h2>Catégories de règles</h2>
          
          <div class="categories-grid">
            <div class="category-card">
              <div class="category-icon">🗄️</div>
              <h3>Base de données et persistance</h3>
              <p>Optimisation JPA, requêtes N+1, colonnes indexées, utilisation efficace des ORM.</p>
            </div>

            <div class="category-card">
              <div class="category-icon">⚡</div>
              <h3>Performance et optimisation</h3>
              <p>Optimisation des boucles, expressions conditionnelles, manipulation de tableaux, gestion mémoire.</p>
            </div>

            <div class="category-card">
              <div class="category-icon">💾</div>
              <h3>Gestion des ressources</h3>
              <p>Fuites mémoire, garbage collection, gestion des fichiers, optimisation des ressources système.</p>
            </div>

            <div class="category-card">
              <div class="category-icon">🎨</div>
              <h3>Frontend et UI/UX</h3>
              <p>Manipulation du DOM, optimisation CSS, formats d'images, rendu côté client efficace.</p>
            </div>

            <div class="category-card">
              <div class="category-icon">📱</div>
              <h3>Mobile</h3>
              <p>Géolocalisation, luminosité d'écran, consommation énergétique, cycles de vie des applications.</p>
            </div>

            <div class="category-card">
              <div class="category-icon">🤖</div>
              <h3>Data et Intelligence Artificielle</h3>
              <p>Vectorisation, opérations sur tenseurs, optimisation des modèles, efficacité algorithmique.</p>
            </div>
          </div>
        </div>

        <div class="rules-preview-section">
          <h2>Explorer le référentiel complet</h2>
          <p class="section-description">
            Consultez toutes les règles d'éco-conception, filtrez par technologie, sévérité et statut d'implémentation.
          </p>
          
          <div class="rules-cta">
            <router-link to="/rules" class="explore-button">
              Voir toutes les règles
            </router-link>
          </div>
        </div>

        <div class="features-section">
          <h2>Caractéristiques du référentiel</h2>
          
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-icon">✅</div>
              <div class="feature-content">
                <h3>Règles implémentées</h3>
                <p>Règles déjà disponibles dans les plugins Creedengo, prêtes à l'emploi.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">🚧</div>
              <div class="feature-content">
                <h3>Règles en cours de développement</h3>
                <p>Nouvelles règles en phase d'expérimentation et de validation par la communauté.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">🚀</div>
              <div class="feature-content">
                <h3>Règles à implémenter</h3>
                <p>Bonnes pratiques identifiées, en attente de contribution pour leur implémentation.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">📊</div>
              <div class="feature-content">
                <h3>Niveaux de sévérité</h3>
                <p>Chaque règle est classée selon son impact potentiel sur l'environnement.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <div class="feature-content">
                <h3>Évolution continue</h3>
                <p>Le référentiel s'enrichit régulièrement grâce aux contributions du collectif.</p>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">🌍</div>
              <div class="feature-content">
                <h3>Multi-technologies</h3>
                <p>Règles applicables à Java, PHP, Python, JavaScript/TypeScript, C#, Android et iOS.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contribute-section">
          <h2>Contribuer au référentiel</h2>
          <p class="section-description">
            Le référentiel Green Code Rules est un projet collaboratif. Vous pouvez contribuer en :
          </p>
          
          <div class="contribute-grid">
            <div class="contribute-card">
              <h3>💡 Proposer de nouvelles règles</h3>
              <p>Identifiez des patterns de code inefficaces et proposez des règles pour les améliorer.</p>
            </div>

            <div class="contribute-card">
              <h3>🔬 Expérimenter et valider</h3>
              <p>Participez à la validation scientifique des règles proposées.</p>
            </div>

            <div class="contribute-card">
              <h3>💻 Implémenter des règles</h3>
              <p>Développez les détecteurs de règles pour les plugins Creedengo.</p>
            </div>

            <div class="contribute-card">
              <h3>📝 Améliorer la documentation</h3>
              <p>Enrichissez les descriptions, exemples et justifications des règles existantes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm 
      title="Une question sur Green Code Rules ?"
      section-id="contact-green-code-rules"
      :individual-options="[
        'Je souhaite contribuer à Green Code Rules',
        'Je souhaite des informations sur Green Code Rules'
      ]"
      :organization-options="[
        'Je souhaite contribuer à Green Code Rules (mise à contribution de collaborateurs)',
        'Je souhaite des informations sur Green Code Rules'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import ContactForm from '@/components/shared/form/ContactForm.vue';

useHead({
  title: 'Green Code Rules - Référentiel de bonnes pratiques',
  meta: [
    {
      name: 'description',
      content: 'Green Code Rules est le référentiel central de plus de 100 bonnes pratiques d\'éco-conception logicielle développées par le collectif Green Code Initiative, couvrant 7 technologies.'
    }
  ]
});
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

.github-button,
.rules-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
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

.intro-text,
.section-description {
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;

  .stat-number {
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1.125rem;
    color: #333;
    font-weight: 600;
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .category-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #666;
  }
}

.rules-cta {
  text-align: center;
  margin-top: 2rem;
}

.explore-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: var(--color-secondary);
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
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

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.contribute-card {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  border-top: 4px solid var(--color-secondary);

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
  }
}
</style>
