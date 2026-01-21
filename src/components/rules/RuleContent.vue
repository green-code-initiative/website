<script lang="ts" setup>
import AppButton from "@/components/shared/AppButton.vue";
import AppTabs from "@/components/shared/AppTabs.vue";
import { vExternalLinks } from "@/composables/external-links";
import { useFetchText } from "@/composables/fetch";
import { computed, ref } from "vue";

const { rule, technologies, contentUrlTemplate } = defineProps<{
  rule: Rule;
  technologies: RuleMeta["technologies"];
  contentUrlTemplate: string;
}>();

const tabs = computed(() =>
  rule.technologies.map((tech) => ({ id: tech, label: technologies[tech]! })),
);
const selectedTab = ref(rule.technologies[0]!);

const contentUrl = computed(() =>
  contentUrlTemplate
    .replace("{id}", rule.id)
    .replace("{technology}", selectedTab.value),
);

const { data: content } = useFetchText(contentUrl);
</script>

<template>
  <AppTabs v-if="tabs.length > 1" v-model="selectedTab" :tabs="tabs" />
  <article class="rule-content" v-external-links v-html="content"></article>
  <div class="rule-actions">
    <AppButton text="Go back to list" variant="neutral" link="/rules" />
  </div>
</template>

<style lang="scss">
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
  justify-content: left;
  margin: 0 0 2rem;
}
</style>
