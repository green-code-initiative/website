<script lang="ts" setup>
import AppBadge from "@/components/shared/AppBadge.vue";
import RuleSeverity from "@/components/rules/RuleSeverity.vue";
import { computed } from "vue";

const { rule } = defineProps<{ rule: Rule }>();
const isDeprecated = computed(() => rule.status === "DEPRECATED");
</script>

<template>
  <div class="rule-card">
    <div class="rule-info" :class="isDeprecated ? 'deprecated' : ''">
      <a :href="`#id:${rule.id}`" class="rule-name">{{ rule.name }}</a>
      <span class="rule-id">{{ rule.id }}</span>
    </div>
    <div class="rule-badges">
      <RuleSeverity :severity="rule.severity" />
      <AppBadge v-for="tech in rule.technologies" :key="tech" :text="tech" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rule-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: var(--shadow-border-small);
  border-radius: 0.5rem;
  padding: 1rem;

  .rule-info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    &.deprecated {
      color: hsl(var(--text-accent));
      text-decoration: line-through;
    }

    .rule-name {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    .rule-id {
      color: hsl(var(--text-accent));
    }
  }

  .rule-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
