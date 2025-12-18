<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <router-link to="membres">Membres contributeurs</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
nav {
  background-color: var(--color-tertiary);
  color: var(--color-on-tertiary);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 1rem;
  gap: 1rem;

  > a {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);

    &.router-link-active {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  @media screen and (min-width: 796px) {
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (min-width: 960px) {
    gap: 6rem;

    > a {
      font-size: 2rem;
    }
  }
}
</style>
