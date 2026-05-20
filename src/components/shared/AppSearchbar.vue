<script lang="ts" setup>
import SearchIcon from "@/assets/icons/search.svg?component";

const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      aria-label="Filtrer les règles par identifiant ou titre"
      v-model="model"
      placeholder="Rechercher... "
    />
    <SearchIcon />
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  position: relative;
  max-width: 500px;

  svg {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 0.875rem;
    top: -0.75rem;
  }

  input {
    appearance: none;
    background-color: hsl(var(--card));
    color: hsl(var(--text-neutral));
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 0.5rem;
    border: solid 1px hsl(var(--surface-accent));
    font-size: 18px;
    font-weight: 500;
    height: 3rem;
    outline: none;
    width: 100%;
    transform: translateY(-50%);
    transition: box-shadow 0.08s ease-in-out;

    &:focus,
    &:focus-within {
      border-color: hsl(var(--text-secondary));
    }
  }
}
</style>
