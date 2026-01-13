<script lang="ts" setup>
import { vExternalLinks } from "@/composables/external-links";
import { useFetchText } from "@/composables/fetch";
import { computed } from "vue";
import AppButton from "../shared/AppButton.vue";

const { rule, contentUrlTemplate } = defineProps<{
  rule: Rule;
  contentUrlTemplate: string;
}>();

const contentUrl = computed(() =>
  contentUrlTemplate
    .replace("{id}", rule.id)
    .replace("{technology}", rule.technologies[0]!)
);

const { data: content } = useFetchText(contentUrl);
</script>

<template>
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
