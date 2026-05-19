import { computed, reactive, watch, type Ref } from "vue";

const STORAGE_KEY = "ruleFilters";

const createDefaultState = (values: string[]): Record<string, boolean> => {
  return values.reduce((acc, value) => ({ ...acc, [value]: false }), {});
};

const isFilterEnabled = (filter: RuleFilter): boolean => {
  return Object.values(filter).some((value) => value);
};

const isSearchEnabled = (keyword: string): boolean => {
  return keyword.trim().length > 0;
};

const loadFiltersFromStorage = (meta: RuleMeta): RuleFilters => {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Ignore parsing errors and fall back to default state
    }
  }

  return {
    technologies: createDefaultState(Object.keys(meta.technologies)),
    severities: createDefaultState(meta.severities),
    statuses: createDefaultState(meta.statuses),
  };
};

export type RuleFilter = Record<string, boolean>;

export type RuleFilters = {
  technologies: RuleFilter;
  severities: RuleFilter;
  statuses: RuleFilter;
};

type UseRuleFiltersOptions = {
  list: RuleList;
  searchKeyword: Ref<string>;
};

const searchRule = (keyword: string, item: Rule): boolean => {
  return item.id.toLocaleLowerCase().includes(keyword) ||
    item.name.toLocaleLowerCase().includes(keyword);
}

export const useRuleFilters = ({list, searchKeyword}: UseRuleFiltersOptions) => {
  const filters = reactive(loadFiltersFromStorage(list.meta));

  const filteredRules = computed(() => {
    const { technologies, severities, statuses } = filters;
    const normalizedSearchKeyword = searchKeyword.value.toLocaleLowerCase();
    return list.items.filter(
      (item) =>
        (!isFilterEnabled(technologies) ||
          item.technologies.some((tech) => technologies[tech])) &&
        (!isFilterEnabled(severities) || severities[item.severity]) &&
        (!isFilterEnabled(statuses) || statuses[item.status]) &&
        // Search Rule if keyword exists
        (!isSearchEnabled(normalizedSearchKeyword) || searchRule(normalizedSearchKeyword, item))
    );
  });

  // Save filters to sessionStorage when they change
  watch(
    filters,
    (newFilters) => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newFilters));
      } catch {
        // Ignore storage errors
      }
    },
    { 
      deep: true,
      flush: 'post'
    }
  );

  return { filters, filteredRules };
};
