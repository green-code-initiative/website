<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
</script>

<template>
  <div class="hero-container">
    <h1>
      Réduisons l'impact <span class="env">environnemental</span> et<br />
      <span class="soc">social</span> des solutions numériques
    </h1>
    <h2>Collectif open-source engagé pour des services durables</h2>
    <div class="buttons">
      <AppButton
        variant="primary"
        link="/contributeur"
        text="Je souhaite contribuer"
      />
      <AppButton
        variant="neutral"
        link="/entreprise"
        text="Je souhaite une intégration sur-mesure"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  gap: 2rem;
  text-align: center;

  background: linear-gradient(
    84.38deg,
    rgba(140, 130, 227, 0.15) -5.58%,
    rgba(133, 230, 163, 0.15) 103.22%
  );
  box-shadow: var(--shadow-border-small);

  h1 {
    font-size: 3rem;
    font-weight: 900;
    color: hsl(var(--text-neutral));

    .env {
      background: linear-gradient(
        350deg,
        hsl(var(--primary-800)) 10%,
        hsl(var(--primary-600)) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .soc {
      background: linear-gradient(
        25deg,
        hsl(var(--secondary-800)) 0%,
        hsl(var(--secondary-500)) 80%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: hsl(var(--text-accent));
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem 6rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
}
</style>
