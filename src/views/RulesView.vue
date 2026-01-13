<script lang="ts" setup>
import RuleContent from "@/components/rules/RuleContent.vue";
import RuleSeverity from "@/components/rules/RuleSeverity.vue";
import RulesList from "@/components/rules/RulesList.vue";
import AppAlert from "@/components/shared/AppAlert.vue";
import { useFetchJson } from "@/composables/fetch";
import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { data } = useFetchJson<RuleList>(import.meta.env.VITE_RULES_URL);

const ruleData = computed(() =>
  route.hash.startsWith("#id:") && data.value
    ? data.value?.items.find(
        (item) => item.id === route.hash.replace("#id:", "")
      )
    : null
);

// do not expose this page during alpha testing
useHead({ meta: [{ name: "robots", content: "noindex" }] });
</script>

<template>
  <div class="hero">
    <div class="container">
      <template v-if="ruleData">
        <h1>{{ ruleData.name }}</h1>
        <div class="metadata">
          <h2>{{ ruleData.id }}</h2>
          <RuleSeverity :severity="ruleData.severity" />
        </div>
      </template>
      <h1 v-else>Our rule repository</h1>
    </div>
  </div>
  <div class="container">
    <AppAlert variant="warning">
      This is an <strong>alpha version</strong> of the rule repository. Some
      features may not work as expected.
    </AppAlert>
    <RulesList v-if="data && !ruleData" :list="data" />
    <RuleContent
      v-else-if="data && ruleData && data.meta.contentUrlTemplate"
      :rule="ruleData"
      :content-url-template="data.meta.contentUrlTemplate"
    />
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

  h2 {
    font-weight: 700;
    color: hsl(var(--text-accent));
  }

  .container {
    display: flex;
    gap: 1rem;

    .metadata {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
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
