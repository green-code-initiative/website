<script setup lang="ts">
import AppCard from "@/components/shared/AppCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
</script>

<template>
  <AppSection
    title="Analyse d'éco-conception native dans GitHub"
    sub-title="Green CodeQL offre une collection de packs de requêtes CodeQL pour détecter automatiquement les comportements non écologiques dans votre code (processus inutiles, fuites mémoire, etc.) directement dans vos dépôts GitHub grâce à l'analyse statique native de la plateforme."
    container
  >
    <div class="features-grid">
      <AppCard class="feature-card" align="center">
        <div class="feature-icon">🔍</div>
        <h3>Détection automatique</h3>
        <p>
          Identifiez les anti-patterns d'éco-conception au sein même de votre
          workflow GitHub grâce aux code scanning alerts.
        </p>
      </AppCard>

      <AppCard class="feature-card" align="center">
        <div class="feature-icon">🚀</div>
        <h3>Intégration native</h3>
        <p>
          Profitez de l'infrastructure CodeQL de GitHub pour analyser votre
          code sans configuration supplémentaire complexe.
        </p>
      </AppCard>

      <AppCard class="feature-card" align="center">
        <div class="feature-icon">📊</div>
        <h3>Suivi continu</h3>
        <p>
          Surveillez l'évolution de votre dette technique environnementale au
          fil des commits et pull requests.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection title="Comment ça fonctionne ?" container>
    <div class="process-grid">
      <AppCard class="process-card">
        <div class="process-number">1</div>
        <h3>Activez CodeQL</h3>
        <p>
          Activez l'analyse de code dans la section Security de votre dépôt
          GitHub et configurez les workflows CodeQL.
        </p>
      </AppCard>

      <AppCard class="process-card">
        <div class="process-number">2</div>
        <h3>Ajoutez les packs Green CodeQL</h3>
        <p>
          Référencez les query packs Green CodeQL dans votre configuration
          CodeQL pour inclure les règles d'éco-conception.
        </p>
      </AppCard>

      <AppCard class="process-card">
        <div class="process-number">3</div>
        <h3>Analysez et corrigez</h3>
        <p>
          Consultez les alertes générées dans l'onglet Security et suivez les
          recommandations pour améliorer votre code.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection
    title="Technologies supportées"
    sub-title="Green CodeQL évolue progressivement pour couvrir plusieurs langages de programmation supportés par CodeQL."
    container
  >
    <div class="languages-grid">
      <AppCard class="language-card" align="center">
        <div class="language-icon">☕</div>
        <h3>Java/Kotlin</h3>
        <p>Détection d'anti-patterns dans les applications Java et Spring.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">🐍</div>
        <h3>Python</h3>
        <p>
          Identification des problèmes d'efficacité dans le code Python et les
          frameworks ML.
        </p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">📜</div>
        <h3>JavaScript/TypeScript</h3>
        <p>
          Analyse des applications web pour détecter les patterns énergivores.
        </p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">⚙️</div>
        <h3>C/C++</h3>
        <p>Optimisation des applications natives en C et C++.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">🔷</div>
        <h3>C# (.NET)</h3>
        <p>Optimisation des applications .NET et ASP.NET Core.</p>
      </AppCard>

      <AppCard class="language-card" align="center">
        <div class="language-icon">▶️</div>
        <h3>Actions/YAML</h3>
        <p>Amélioration de l'efficacité des workflows CI/CD.</p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection
    title="Contribuer au projet"
    sub-title="Green CodeQL est un projet open-source en développement actif. Votre contribution est la bienvenue !"
    container
  >
    <div class="contribute-grid">
      <AppCard>
        <h3>🔬 Écrire des requêtes CodeQL</h3>
        <p>
          Développez de nouvelles requêtes pour détecter les anti-patterns
          d'éco-conception dans différents langages.
        </p>
      </AppCard>

      <AppCard>
        <h3>✅ Tester et valider</h3>
        <p>
          Testez les requêtes existantes sur vos projets et partagez vos retours
          d'expérience.
        </p>
      </AppCard>

      <AppCard>
        <h3>📚 Enrichir la documentation</h3>
        <p>
          Améliorez les guides d'utilisation, exemples et bonnes pratiques de
          configuration.
        </p>
      </AppCard>

      <AppCard>
        <h3>🌍 Partager vos retours</h3>
        <p>
          Signalez les problèmes, proposez des améliorations et partagez vos cas
          d'usage.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <ContactForm
    title="Besoin d'aide avec Green CodeQL ?"
    section-id="contact-green-codeql"
    :individual-options="[
      'Je souhaite contribuer à Green CodeQL',
      'Je souhaite des informations sur Green CodeQL',
      'J\'ai besoin d\'aide pour l\'intégration',
    ]"
    :organization-options="[
      'Je souhaite contribuer à Green CodeQL (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur Green CodeQL',
      'Je souhaite un accompagnement pour l\'intégration',
    ]"
  />
</template>

<style scoped lang="scss">
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.feature-card {
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: hsl(var(--primary-700));
  }

  p {
    color: hsl(var(--neutral-600));
  }
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.process-card {
  .process-number {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: hsl(var(--primary-500));
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: hsl(var(--primary-700));
  }

  p {
    color: hsl(var(--neutral-600));
  }
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
}

.language-card {
  .language-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: hsl(var(--primary-700));
  }

  p {
    color: hsl(var(--neutral-600));
    font-size: 0.9rem;
  }
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  width: 100%;
}

.contribute-grid .app-card {
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: hsl(var(--primary-700));
  }

  p {
    color: hsl(var(--neutral-600));
  }
}
</style>
