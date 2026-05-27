<script lang="ts" setup>
import AppButton from "@/components/shared/AppButton.vue";
import AppTabs from "@/components/shared/AppTabs.vue";
import { vExternalLinks } from "@/composables/external-links";
import { useFetchText } from "@/composables/fetch";
import { computed, ref } from "vue";

const { rule, languages, contentUrlTemplate } = defineProps<{
  rule: Rule;
  languages: RuleMeta["languages"];
  contentUrlTemplate: string;
}>();

const tabs = computed(() =>
  Object.keys(rule.languages).map((lang) => ({
    id: lang,
    label: languages[lang]!,
  })),
);
const selectedTab = ref(Object.keys(rule.languages)[0]!);

const contentUrl = computed(() =>
  contentUrlTemplate
    .replace("{id}", rule.id)
    .replace("{language}", selectedTab.value),
);

const { data: content } = useFetchText(contentUrl);
</script>

<template>
  <main>
    <AppTabs v-if="tabs.length > 1" v-model="selectedTab" :tabs="tabs" />
    <article class="rule-content" v-external-links v-html="content"></article>
    <div class="rule-actions">
      <AppButton text="Go back to list" variant="neutral" link="/rules" />
    </div>
  </main>
</template>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

article.rule-content {
  min-height: 60vh;

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    overflow-y: auto;
  }

  a {
    word-break: break-all;
  }
}

.rule-actions {
  display: flex;
  justify-content: flex-start;
}
</style>
