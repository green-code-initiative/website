<template>
  <div class="goals">
    <h2>Des objectifs</h2>
    <div class="cards">
      <div class="card">
        <h3>Open Source</h3>
        <p>
          Développez de nouvelles règles d’éco-conception pour SonarQube et
          améliorez cet outil open source pour le développement responsable.
        </p>
      </div>
      <div class="card">
        <h3>Promotion du Green Code</h3>
        <p>
          Sensibilisez la communauté tech à l’importance de l’éco-coding et
          aidez-la à intégrer ces pratiques dans leurs projets.
        </p>
      </div>
      <div class="card">
        <h3>Collaboration active</h3>
        <p>
          Mettez à profit l'intelligence collective pour co-construire un
          numérique plus respectueux de l’environnement et réduire son empreinte
          carbone.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.goals {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;

    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 3rem 1rem;
      gap: 10px;

      background: linear-gradient(
        204.35deg,
        hsl(var(--surface) / 0.2) -5.42%,
        hsl(var(--surface)) 108.21%
      );
      border-radius: 16px;

      box-shadow: var(--shadow-border-small);

      h3 {
        font-size: 1.5rem;
        font-weight: 800;
      }
    }
  }
}
</style>
