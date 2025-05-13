<script lang="ts" setup>
import RulesList from "@/components/rules/RulesList.vue";
import AppAlert from "@/components/shared/AppAlert.vue";
import { useFetch } from "@/composables/fetch";
import { useHead } from "@unhead/vue";

const { data } = useFetch<RuleList>(import.meta.env.VITE_RULES_URL);

// do not expose this page during alpha testing
useHead({ meta: [{ name: "robots", content: "noindex" }] });
</script>

<template>
  <div class="hero">
    <div class="container">
      <h1>Our rule repository</h1>
    </div>
  </div>
  <div class="container">
    <AppAlert variant="warning">
      This is an <strong>alpha version</strong> of the rule repository. Some
      features may not work as expected.
    </AppAlert>
    <RulesList v-if="data" :list="data" />
    <p class="loading" v-else>Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 4rem 0;
  background-color: hsl(var(--neutral-50));
  box-shadow: var(--shadow-border-small);

  h1 {
    font-weight: 900;
  }

  @media (min-width: 1144px) {
    padding: 4rem 2rem;
  }
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

.alert {
  margin: 2rem 0 1rem;
}

.loading {
  height: 100vh;
}
</style>
