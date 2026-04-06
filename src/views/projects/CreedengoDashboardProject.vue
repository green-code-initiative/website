<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
</script>

<template>
  <AppSection
    sub-title="Creedengo Dashboard est né du projet Greensight de Capgemini, dans
            le cadre de leurs initiatives de modernisation applicative et cloud
            responsable. Ce tableau de bord permet de visualiser l'impact des
            pratiques d'éco-conception, d'aider les équipes à prioriser leurs
            actions et de prévenir l'introduction de nouvelles régressions
            environnementales."
    container
  >
    <div class="reference-links">
      <AppButton
        link="https://www.capgemini.com/fr-fr/perspectives/blog/cloud-et-green-it/"
        type="external_link"
        text="📖 Article Capgemini : Cloud et Green IT"
        variant="neutral"
      />
      <AppButton
        link="https://fr.linkedin.com/pulse/modernisation-applicative-cloud-et-num%C3%A9rique-un-trio-pascal"
        type="external_link"
        text="📖 Modernisation applicative et numérique responsable"
        variant="neutral"
      />
    </div>
  </AppSection>

  <AppSection title="Fonctionnalités principales" container>
    <div class="features-list">
      <div class="feature-item">
        <div class="feature-icon">📊</div>
        <div class="feature-content">
          <h3>Visualisation des métriques</h3>
          <p>
            Présentation claire et accessible des métriques d'éco-conception
            issues des analyses Creedengo
          </p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <div class="feature-content">
          <h3>Priorisation des actions</h3>
          <p>
            Aide à la décision pour prioriser les améliorations de code selon
            leur impact environnemental
          </p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🛡️</div>
        <div class="feature-content">
          <h3>Prévention des régressions</h3>
          <p>
            Détection précoce des problèmes pour éviter leur introduction en
            production
          </p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🧩</div>
        <div class="feature-content">
          <h3>Architecture modulaire</h3>
          <p>
            Widgets web components réutilisables dans différents contextes (IDE,
            CI/CD, wikis)
          </p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔧</div>
        <div class="feature-content">
          <h3>Catalogue de widgets testables</h3>
          <p>
            Composants développés et testés individuellement avec Storybook pour
            une qualité optimale
          </p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🌐</div>
        <div class="feature-content">
          <h3>Architecture ouverte</h3>
          <p>
            Conçu pour s'intégrer dans de multiples environnements et sources de
            données
          </p>
        </div>
      </div>
    </div>
  </AppSection>

  <AppSection title="Intégrations disponibles et futures" container>
    <div class="integration-grid">
      <AppCard class="integration-card">
        <div class="header">
          <h3>Extension VSCode</h3>
          <span class="status-badge available">Disponible</span>
        </div>
        <p>
          Intégration directe dans Visual Studio Code pour que les développeurs
          puissent consulter les métriques d'éco-conception sans quitter leur
          IDE.
        </p>
        <AppButton
          text="Télécharger →"
          variant="primary"
          href="https://github.com/green-code-initiative/creedengo-dashboard/releases"
          type="external_link"
        />
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Plugin SonarQube</h3>
          <span class="status-badge in-progress">En développement</span>
        </div>
        <p>
          Page d'extension SonarQube permettant de visualiser les métriques
          d'éco-conception directement dans l'interface SonarQube du projet.
        </p>
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Intégrations CI/CD</h3>
          <span class="status-badge planned">Planifié</span>
        </div>
        <p>
          Intégration dans les workflows CI/CD (GitHub, GitLab, Bitbucket, Azure
          DevOps) pour afficher les métriques dans les Pull/Merge Requests.
        </p>
      </AppCard>

      <AppCard class="integration-card">
        <div class="header">
          <h3>Wikis et documentation</h3>
          <span class="status-badge planned">Planifié</span>
        </div>
        <p>
          Widgets intégrables dans les wikis projet (Confluence, GitHub/GitLab,
          SharePoint) pour sensibiliser les décideurs.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection
    title="Contribuer au projet"
    sub-title="Le projet est en développement actif et recherche des
            contributeurs pour accélérer son évolution."
    container
  >
    <div class="contribute-grid">
      <AppCard>
        <h3>🚀 État du projet</h3>
        <p>
          Le projet est fonctionnel mais encore en phase de développement.
          L'extension VSCode est disponible en version préliminaire et le plugin
          SonarQube est en cours de finalisation.
        </p>
      </AppCard>
      <AppCard>
        <h3>🤝 Rejoignez-nous</h3>
        <p>
          Que vous soyez développeur Vue.js, expert en visualisation de données
          ou simplement intéressé par l'éco-conception, vos contributions sont
          les bienvenues !
        </p>
      </AppCard>
      <AppCard>
        <h3>📚 Documentation</h3>
        <p>
          Consultez le
          <a
            href="https://github.com/green-code-initiative/creedengo-dashboard/blob/main/CONTRIBUTING.md"
            target="_blank"
            >guide de contribution</a
          >
          pour démarrer le projet en local et comprendre l'architecture.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <ContactForm
    title="Besoin d'aide ou d'informations ?"
    section-id="creedengo-dashboard"
    :individual-options="[
      'Je souhaite contribuer au développement',
      'Je veux intégrer le dashboard dans mon organisation',
      'J\'ai besoin d\'aide pour l\'installation',
      'J\'ai une question technique',
      'Autre sujet',
    ]"
    :organization-options="[
      'Intégration du dashboard dans notre infrastructure',
      'Formation des équipes',
      'Support technique',
      'Partenariat',
      'Autre demande',
    ]"
  />
</template>

<style scoped lang="scss">
.reference-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.feature-item {
  display: flex;
  gap: 1.5rem;

  .feature-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .feature-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 1.125rem;
    }

    p {
      line-height: 1.6;
      color: hsl(var(--text-accent));
    }
  }
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
}

.integration-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .status-badge {
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    align-self: flex-start;

    &.available {
      background-color: hsl(var(--primary-200));
      color: hsl(var(--primary-900));
    }

    &.in-progress {
      background-color: hsl(var(--warning-300));
      color: hsl(var(--neutral-900));
    }

    &.planned {
      background-color: hsl(var(--secondary-100));
      color: hsl(var(--secondary-900));
    }
  }

  p {
    color: hsl(var(--text-accent));
  }

  a {
    align-self: flex-end;
  }
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
