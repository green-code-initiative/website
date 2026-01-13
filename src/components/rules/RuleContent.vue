<script lang="ts" setup>
import { useFetchText } from "@/composables/fetch";
import AppButton from "../shared/AppButton.vue";

const { rule, contentUrlTemplate } = defineProps<{
  rule: Rule;
  contentUrlTemplate: string;
}>();

const { data: content } = useFetchText(
  contentUrlTemplate
    .replace("{id}", rule.id)
    .replace("{technology}", rule.technologies[0]!)
);
</script>

<template>
  <article class="rule-content" v-html="content"></article>
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
}

.rule-actions {
  display: flex;
  justify-content: left;
  margin: 0 0 2rem;
}
</style>
