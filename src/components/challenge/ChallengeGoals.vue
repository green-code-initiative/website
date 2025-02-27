<template>
  <div class="goals">
    <h2>Des objectifs</h2>
    <div class="cards">
      <div class="card">
        <h3>Open Source</h3>
        <p>
          Participez à l’enrichissement du plugin SonarQube en contribuant
          technologiquement avec l’ensemble des développeuses / développeurs.
        </p>
      </div>
      <div class="card">
        <h3>Green code</h3>
        <p>
          La mission du collectif est d’outiller les développeuses /
          développeurs pour faciliter la mise en œuvre de pratiques
          d’eco-coding.
        </p>
      </div>
      <div class="card">
        <h3>Collaboration</h3>
        <p>
          La force de l’intelligence collective au profit de la co-construction
          d’outils pour un numérique écoconçu.
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

      background: linear-gradient(204.35deg, #f5f5f5 -5.42%, #e5e5e5 108.21%);
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
