<script lang="ts" setup>
import RuleCard from "@/components/rules/RuleCard.vue";
import RulesFilters from "@/components/rules/RulesFilters.vue";
import AppButton from "@/components/shared/AppButton.vue";
import { useRuleFilters } from "@/composables/rule-filters";

const props = defineProps<{ list: RuleList }>();
const { items, meta, build } = props.list;

const { filters, filteredRules } = useRuleFilters(props.list);

const buildDatetime = new Intl.DateTimeFormat("default", {
  dateStyle: "short",
  timeStyle: "short",
}).format(new Date(build.datetime));
</script>

<template>
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
        <RuleCard :rule="rule" :technologies="meta.technologies" />
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
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  /* TODO rework the component for mobile devices */
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
      hsl(var(--secondary-50)) 0%,
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
