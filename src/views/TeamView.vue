<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>Notre collectif</h1>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.hero {
  padding: 2rem 0.5rem;
  background-color: hsl(var(--secondary-50) / 0.4);
  box-shadow: var(--shadow-border-small);

  h1 {
    font-weight: 900;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    max-width: 1080px;
    gap: 1.5rem;

    @media (min-width: 1112px) {
      margin: 0 auto;
    }
  }

  @media (min-width: 1144px) {
    padding: 4rem 2rem;
  }
}
</style>
