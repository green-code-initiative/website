import { computed, ref, watch, type Ref } from "vue";

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
    languages: createDefaultState(Object.keys(meta.languages)),
    severities: createDefaultState(meta.severities),
    statuses: createDefaultState(meta.statuses),
  };
};

export type RuleFilter = Record<string, boolean>;

export type RuleFilters = {
  languages: RuleFilter;
  severities: RuleFilter;
  statuses: RuleFilter;
};

type UseRuleFiltersOptions = {
  list: RuleList;
  searchKeyword: Ref<string>;
};

const searchRule = (keyword: string, item: Rule): boolean => {
  return (
    item.id.toLocaleLowerCase().includes(keyword) ||
    item.name.toLocaleLowerCase().includes(keyword)
  );
};

export const useRuleFilters = ({
  list: { meta, items },
  searchKeyword,
}: UseRuleFiltersOptions) => {
  const filters = ref(loadFiltersFromStorage(meta));

  const filteredRules = computed(() => {
    const { languages, severities, statuses } = filters.value;
    const normalizedSearchKeyword = searchKeyword.value.toLocaleLowerCase();
    return items.filter(
      (item) =>
        (!isFilterEnabled(languages) ||
          Object.keys(item.languages).some((lang) => languages[lang])) &&
        (!isFilterEnabled(severities) || severities[item.severity]) &&
        (!isFilterEnabled(statuses) ||
          Object.values(item.languages).some(
            (lang) => statuses[lang.status],
          )) &&
        // Search Rule if keyword exists
        (!isSearchEnabled(normalizedSearchKeyword) ||
          searchRule(normalizedSearchKeyword, item)),
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
      flush: "post", // update cache only after DOM is rendered
    },
  );

  return { filters, filteredRules };
};
