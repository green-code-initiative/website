<template>
  <div class="project-detail">
    <section class="hero-section">
      <div class="hero-content">
        <img 
          src="/img/projects/creedengo.svg" 
          alt="Logo Creedengo" 
          class="project-logo"
        />
        <h1>Creedengo</h1>
        <p class="subtitle">Anciennement ecoCode</p>
        <p class="hero-description">
          Collection de plugins SonarQube pour identifier les problèmes d'éco-conception dans votre code source
        </p>
        <div class="hero-actions">
          <a 
            href="https://github.com/green-code-initiative" 
            target="_blank" 
            rel="noopener noreferrer"
            class="github-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="content-container">
        <div class="intro-section">
          <h2>Un outil basé sur notre référentiel de règles d'éco-conception logicielle</h2>
          
          <div class="feature-grid">
            <div class="feature-card">
              <h3>🔍 Identification des défauts</h3>
              <p>Une collection de plugins pour <strong>SonarQube</strong> qui analyse votre base de code et identifie les structures problématiques.</p>
            </div>

            <div class="feature-card primary">
              <h3>🌿 Impact écologique</h3>
              <p>Aide à limiter l'<strong>impact environnemental</strong> de vos programmes en détectant les surconsommations d'énergie et de ressources.</p>
            </div>

            <div class="feature-card">
              <h3>💝 Open Source et Gratuit</h3>
              <p>Complètement <strong>open-source</strong> et gratuit, accessible à tous les développeurs.</p>
            </div>

            <div class="feature-card">
              <h3>👥 Force du collectif</h3>
              <p>Propulsé par les contributions d'<strong>entreprises</strong>, de <strong>laboratoires</strong> et d'<strong>individuels</strong>.</p>
            </div>
          </div>
        </div>

        <div class="technologies-section">
          <h2>Technologies supportées</h2>
          <p class="section-description">Creedengo s'adapte à vos technologies préférées avec 7 langages supportés :</p>
          
          <div class="tech-grid">
            <div class="tech-card">
              <h4>Java</h4>
              <a href="https://github.com/green-code-initiative/creedengo-java" target="_blank" rel="noopener">Plugin Java →</a>
            </div>
            <div class="tech-card">
              <h4>JavaScript / TypeScript</h4>
              <a href="https://github.com/green-code-initiative/creedengo-javascript" target="_blank" rel="noopener">Plugin JS/TS →</a>
            </div>
            <div class="tech-card">
              <h4>PHP</h4>
              <a href="https://github.com/green-code-initiative/creedengo-php" target="_blank" rel="noopener">Plugin PHP →</a>
            </div>
            <div class="tech-card">
              <h4>Python</h4>
              <a href="https://github.com/green-code-initiative/creedengo-python" target="_blank" rel="noopener">Plugin Python →</a>
            </div>
            <div class="tech-card">
              <h4>C#</h4>
              <a href="https://github.com/green-code-initiative/creedengo-csharp" target="_blank" rel="noopener">Plugin C# →</a>
            </div>
            <div class="tech-card">
              <h4>Android</h4>
              <a href="https://github.com/green-code-initiative/ecoCode-android" target="_blank" rel="noopener">Plugin Android →</a>
            </div>
            <div class="tech-card">
              <h4>iOS</h4>
              <a href="https://github.com/green-code-initiative/creedengo-ios" target="_blank" rel="noopener">Plugin iOS →</a>
            </div>
          </div>
        </div>

        <div class="process-section">
          <h2>Le processus de création d'une règle Creedengo</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Identification</h3>
              <p>Nous identifions des patterns de code qui pourraient être améliorés (code smells)</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Production</h3>
              <p>Les membres contributeurs produisent la règle permettant de réduire l'impact du code</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Expérimentation</h3>
              <p>La règle est testée en comparaison avec le code smell</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Validation</h3>
              <p>Une équipe expérimentée étudie et valide la nouvelle règle</p>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Intégration</h3>
              <p>La règle est publiée dans notre référentiel Open Source</p>
            </div>
            <div class="process-step">
              <div class="step-number">6</div>
              <h3>Utilisation</h3>
              <p>Utilisation de la règle par des équipes techniques dans leur organisation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm 
      title="Une question sur Creedengo ?"
      section-id="contact-creedengo"
      :individual-options="[
        'Je souhaite contribuer à Creedengo',
        'Je souhaite des informations sur Creedengo'
      ]"
      :organization-options="[
        'Je souhaite développer des règles pour mon organisation',
        'Je souhaite contribuer à Creedengo (mise à contribution de collaborateurs)',
        'Je souhaite soutenir Creedengo financièrement',
        'Je souhaite des informations sur Creedengo'
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import ContactForm from '@/components/shared/form/ContactForm.vue';

useHead({
  title: 'Creedengo - Plugins SonarQube pour l\'éco-conception',
  meta: [
    {
      name: 'description',
      content: 'Creedengo (ex. ecoCode) est une collection de plugins SonarQube pour identifier les problèmes d\'éco-conception dans votre code source. Support de 7 technologies : Java, PHP, Python, JS/TS, C#, Android, iOS.'
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
    object-fit: contain;

    @media (max-width: 768px) {
      width: 280px;
      height: 70px;
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0 0 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .subtitle {
    font-size: 1.125rem;
    opacity: 0.9;
    margin: 0 0 1rem 0;
    font-style: italic;
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

.github-button {
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
}

.intro-section {
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &.primary {
    background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  }

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem 0;
    color: var(--color-primary);
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #333;
  }
}

.technologies-section {
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .section-description {
    text-align: center;
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 2rem;
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.tech-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  text-align: center;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--color-secondary);
    transform: translateY(-2px);
  }

  h4 {
    font-size: 1.125rem;
    margin: 0 0 0.75rem 0;
    color: var(--color-primary);
  }

  a {
    color: var(--color-secondary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;

    &:hover {
      text-decoration: underline;
    }
  }
}

.process-section {
  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  text-align: center;
  
  .step-number {
    width: 50px;
    height: 50px;
    background: var(--color-secondary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0 0 0.75rem 0;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: #666;
  }
}
</style>
