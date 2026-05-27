<script lang="ts" setup>
import AppFunnelPlusIcon from "@/assets/icons/funnel_plus.svg";
import RuleCard from "@/components/rules/RuleCard.vue";
import RuleDialogFilter from "@/components/rules/RuleDialogFilter.vue";
import RulesFilters from "@/components/rules/RulesFilters.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppSearchBar from "@/components/shared/AppSearchbar.vue";
import { useRuleFilters } from "@/composables/rule-filters";
import { ref } from "vue";

const props = defineProps<{ list: RuleList }>();
const { items, meta, build } = props.list;
const searchKeyword = ref("");

const { filters, filteredRules } = useRuleFilters({
  list: props.list,
  searchKeyword,
});

const isDialogOpen = ref(false);

const buildDatetime = new Intl.DateTimeFormat("default", {
  dateStyle: "short",
  timeStyle: "short",
}).format(new Date(build.datetime));
</script>

<template>
  <div class="action-bar">
    <AppSearchBar v-model="searchKeyword" />
    <button
      class="show-filters"
      @click="() => (isDialogOpen = !isDialogOpen)"
      aria-label="Appliquer des filtres"
    >
      <AppFunnelPlusIcon />
    </button>
  </div>
  <RuleDialogFilter
    :meta="meta"
    v-model:show="isDialogOpen"
    v-model:filters="filters"
  />
  <div class="content">
    <RulesFilters :meta="meta" class="filters" v-model="filters" />
    <div class="rules">
      <p class="counter">
        <span v-if="filteredRules.length !== items.length">
          Showing {{ filteredRules.length }} of {{ items.length }} rules
        </span>
        <span v-else>Showing {{ items.length }} rules</span>
      </p>

      <template v-for="rule in filteredRules" :key="rule.id">
        <RuleCard :rule="rule" :languages="meta.languages" />
      </template>

      <div class="rule-proposal-card">
        <p>Couldn't find a rule that seems relevant to you?</p>
        <AppButton
          text="I propose"
          variant="primary"
          type="external_link"
          link="https://github.com/green-code-initiative/creedengo-rules-specifications/issues/new?template=new_rule_suggestion.md"
        />
      </div>

      <p class="build-info">
        Updated at <strong>{{ buildDatetime }}</strong>
        <span v-if="build.gitRef !== null">
          from <strong>{{ build.gitRef }}</strong>
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 540px;
  width: 100%;
  gap: 1rem;
  transform: translateY(-50%);

  .show-filters {
    padding: 2.5px;
    appearance: none;
    background-color: hsl(var(--card));
    color: hsl(var(--text-neutral));
    border-radius: 0.5rem;
    border: solid 1px hsl(var(--surface-accent));
    height: 3rem;
    width: 3rem;
    outline: none;
    transition: box-shadow 0.08s ease-in-out;

    &:focus,
    &:focus-within {
      border-color: hsl(var(--text-secondary));
    }

    @media (min-width: 920px) {
      display: none;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  .filters {
    display: none;
  }

  .rules {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .counter {
      color: hsl(var(--text-accent));
    }

    .build-info {
      color: hsl(var(--text-accent));
      font-size: 14px;
      text-align: center;
    }
  }

  @media (min-width: 920px) {
    flex-direction: row;
    align-items: start;

    .filters {
      display: flex;
      flex: 1 0 22%;
    }

    .rules {
      flex: 1 1 78%;

      .build-info {
        text-align: right;
      }
    }
  }

  .rule-proposal-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    background: linear-gradient(
      40deg,
      hsl(var(--secondary-300) / var(--gradient-opacity)) 0%,
      hsl(var(--background)) 120%
    );
    box-shadow: var(--shadow-border-small);

    @media (min-width: 920px) {
      flex-direction: row;

      align-items: center;
      justify-content: space-between;
    }

    p {
      font-weight: bold;
    }
  }
}
</style>
