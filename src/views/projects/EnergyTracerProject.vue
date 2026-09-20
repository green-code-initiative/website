<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
import AppSection from "@/components/shared/AppSection.vue";
import ContactForm from "@/components/shared/form/ContactForm.vue";
</script>

<template>
  <AppSection
    sub-title="Développé dans le cadre d'un mémoire de master en informatique à
            l'Université de Namur, EnergyTracer mesure la consommation
            énergétique de deux variantes de code afin d'objectiver l'impact
            réel des choix d'implémentation, plutôt que de se fier à des
            hypothèses."
    container
  >
    <div class="reference-links">
      <AppButton
        link="https://github.com/green-code-initiative/EnergyTracer#readme"
        type="external_link"
        text="📖 Documentation du projet"
        variant="neutral"
      />
      <AppButton
        link="https://github.com/green-code-initiative/EnergyTracer/blob/main/EXPERIMENT_GUIDE.md"
        type="external_link"
        text="📖 Guide d'expérimentation"
        variant="neutral"
      />
    </div>
  </AppSection>

  <AppSection title="Comment ça fonctionne ?" container>
    <div class="process-grid">
      <AppCard class="process-card" align="center">
        <div class="process-number">1</div>
        <h3>Fournissez deux variantes de code</h3>
        <p>Une version avec un "code smell" et une version corrigée.</p>
      </AppCard>

      <AppCard class="process-card" align="center">
        <div class="process-number">2</div>
        <h3>Lancez une mesure</h3>
        <p>
          Choisissez un profiler (Zeus ou CodeCarbon) et exécutez plusieurs
          itérations de chaque variante.
        </p>
      </AppCard>

      <AppCard class="process-card" align="center">
        <div class="process-number">3</div>
        <h3>Obtenez un comparatif</h3>
        <p>
          Un rapport avec analyse statistique, accompagné de graphiques et de
          visualisations comparatives.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection title="Fonctionnalités principales" container>
    <div class="features-grid">
      <AppCard class="feature-card">
        <h3>🌐 Multi-langages</h3>
        <p>
          Python et Java pris en charge, avec une architecture extensible pour
          ajouter facilement de nouveaux langages.
        </p>
      </AppCard>

      <AppCard class="feature-card">
        <h3>⚡ Deux profilers</h3>
        <p>
          Zeus pour des mesures matérielles précises sur Apple Silicon,
          CodeCarbon pour une estimation logicielle multiplateforme.
        </p>
      </AppCard>

      <AppCard class="feature-card">
        <h3>📊 Analyse statistique automatisée</h3>
        <p>
          Test de Welch, taille d'effet de Cohen et calcul de significativité
          pour fiabiliser les comparaisons.
        </p>
      </AppCard>

      <AppCard class="feature-card">
        <h3>📈 Visualisations riches</h3>
        <p>
          Graphiques comparatifs, box plots et violin plots générés
          automatiquement pour chaque métrique.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <AppSection title="Profilers pris en charge" container>
    <div class="profilers-list">
      <div class="profiler-item">
        <div class="profiler-icon">🖥️</div>
        <div class="profiler-content">
          <h3>Mac Silicon (Zeus)</h3>
          <p>
            Lecture directe des compteurs matériels via IOKit, avec une
            précision sub-milliseconde par composant (CPU, GPU, ANE, DRAM).
            Réservé aux Mac Apple Silicon.
          </p>
        </div>
      </div>
      <div class="profiler-item">
        <div class="profiler-icon">🌍</div>
        <div class="profiler-content">
          <h3>CodeCarbon</h3>
          <p>
            Estimation logicielle basée sur le TDP du processeur et son taux
            d'utilisation, multiplateforme, avec conversion en équivalent CO₂.
          </p>
        </div>
      </div>
    </div>
  </AppSection>

  <AppSection
    title="Contribuer au projet"
    sub-title="EnergyTracer vient de rejoindre le collectif et a besoin de
            contributeurs pour accélérer son évolution."
    container
  >
    <div class="contribute-grid">
      <AppCard>
        <h3>🧩 Ajouter un langage</h3>
        <p>
          Implémentez l'interface <code>CodeRunner</code> pour prendre en charge
          un nouveau langage (Rust, Go...).
        </p>
      </AppCard>

      <AppCard>
        <h3>🔬 Valider les mesures</h3>
        <p>
          Exécutez des expériences sur votre propre matériel pour élargir la
          base de résultats.
        </p>
      </AppCard>

      <AppCard>
        <h3>📊 Améliorer l'analyseur</h3>
        <p>
          Enrichissez ET-analyzer avec de nouvelles métriques ou de nouveaux
          formats de rapport.
        </p>
      </AppCard>

      <AppCard>
        <h3>📝 Enrichir la documentation</h3>
        <p>
          Complétez le guide d'expérimentation et les exemples de code mesuré.
        </p>
      </AppCard>
    </div>
  </AppSection>

  <ContactForm
    title="Une question sur EnergyTracer ?"
    section-id="contact-energy-tracer"
    :individual-options="[
      'Je souhaite contribuer à EnergyTracer',
      'Je souhaite des informations sur EnergyTracer',
    ]"
    :organization-options="[
      'Je souhaite utiliser EnergyTracer dans mon organisation',
      'Je souhaite contribuer à EnergyTracer (mise à contribution de collaborateurs)',
      'Je souhaite des informations sur EnergyTracer',
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

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.process-card {
  .process-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    border-radius: 50%;
    background: hsl(var(--primary-700));
    color: hsl(var(--primary-50));
    font-weight: 900;
  }

  p {
    color: hsl(var(--text-accent));
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  p {
    color: hsl(var(--text-accent));
  }
}

.profilers-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.profiler-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  .profiler-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .profiler-content p {
    color: hsl(var(--text-accent));
  }
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  p {
    color: hsl(var(--text-accent));
  }

  code {
    background: hsl(var(--accent));
    padding: 0.1rem 0.4rem;
    border-radius: var(--radius);
  }
}
</style>
