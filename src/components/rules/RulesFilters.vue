<script lang="ts" setup>
import RuleFilterItem from "@/components/rules/RuleFilterItem.vue";
import type { RuleFilters } from "@/composables/rule-filters";

const { meta } = defineProps<{ meta: RuleMeta }>();
const filters = defineModel<RuleFilters>({ required: true });
</script>

<template>
  <div class="filters">
    <div class="filter-type">
      <h2>Technologies</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="(label, key) in meta.technologies"
          :key="key"
          :id="key"
          :label="label"
          v-model="filters.technologies[key]"
        />
      </div>
    </div>
    <div class="filter-type">
      <h2>Severities</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="severity in meta.severities"
          :key="severity"
          :id="severity"
          :label="
            severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase()
          "
          v-model="filters.severities[severity]"
        />
      </div>
    </div>
    <div class="filter-type">
      <h2>Statuses</h2>
      <div class="filter-items">
        <RuleFilterItem
          v-for="status in meta.statuses"
          :key="status"
          :id="status"
          :label="
            status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
          "
          v-model="filters.statuses[status]"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-right: 0.5rem;
  height: calc(100vh - 100px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    border-radius: 4px;
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e8e8e8;
    border-radius: 4px;
  }

  .filter-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 1rem;
    }
  }

  .filter-items {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
