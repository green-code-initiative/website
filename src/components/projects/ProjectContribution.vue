<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import { useId } from "vue";

withDefaults(
  defineProps<{
    title?: string;
    description: string;
    opportunities: readonly { title: string; description: string }[];
    action: { href: string; label?: string; external?: boolean };
  }>(),
  { title: "Contribuer au projet" },
);

const headingId = useId();
</script>

<template>
  <section class="contribution" :aria-labelledby="headingId">
    <div class="layout">
      <header class="intro">
        <h2 :id="headingId" class="heading-2">{{ title }}</h2>
        <p class="description">{{ description }}</p>
      </header>

      <!-- Keep list semantics in Safari when native markers are hidden. -->
      <!-- eslint-disable-next-line vuejs-accessibility/no-redundant-roles -->
      <ul class="opportunities" role="list">
        <li v-for="opportunity in opportunities" :key="opportunity.title">
          <h3>{{ opportunity.title }}</h3>
          <p>{{ opportunity.description }}</p>
        </li>
      </ul>

      <AppButton
        class="action"
        variant="primary"
        :text="action.label ?? 'Je souhaite contribuer'"
        :link="action.href"
        :type="action.external ? 'external_link' : 'button'"
      />
    </div>
  </section>
</template>

<style scoped>
.contribution {
  --contribution-background: hsl(var(--primary-50));
  --contribution-foreground: inherit;
  --contribution-accent: hsl(var(--primary-800));
  --contribution-copy: hsl(var(--text-accent));
  --contribution-rule: hsl(var(--text-primary) / 0.4);

  background: var(--contribution-background);
  color: var(--contribution-foreground);
  border-block-start: 4px solid var(--contribution-accent);
  margin-block: 2rem;
}

@media (prefers-color-scheme: dark) {
  .contribution {
    --contribution-background: hsl(var(--primary-900));
    --contribution-foreground: hsl(var(--neutral-0));
    --contribution-accent: hsl(var(--text-primary));
    --contribution-copy: hsl(var(--primary-100));
    --contribution-rule: hsl(var(--text-primary) / 0.3);
  }
}

.layout {
  max-width: 1112px;
  margin-inline: auto;
  padding: clamp(2.5rem, 6vw, 5rem) 1rem;
}

.intro {
  margin-block-end: clamp(1.75rem, 4vw, 3rem);
}

.heading-2 {
  margin: 0 0 1rem;
  color: inherit;
  text-align: start;
  overflow-wrap: anywhere;
}

.description,
.opportunities p {
  color: var(--contribution-copy);
  line-height: 1.55;
}

.description {
  max-width: 62ch;
  font-size: 1.125rem;
}

.opportunities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 4vw, 2.75rem) clamp(2.5rem, 7vw, 5rem);
  list-style: none;
}

.opportunities li::before {
  content: "";
  display: block;
  inline-size: 2rem;
  margin-block-end: 0.75rem;
  border-block-start: 2px solid var(--contribution-rule);
}

.opportunities p {
  max-width: 42ch;
  line-height: 1.65;
}

.opportunities h3 {
  margin-block-end: 0.4rem;
  color: var(--contribution-accent);
  font-size: 1.25rem;
  font-weight: 800;
}

.action {
  width: fit-content;
  min-height: 44px;
  margin-block-start: clamp(1.75rem, 4vw, 3rem);
}

@media (max-width: 640px) {
  .opportunities {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
