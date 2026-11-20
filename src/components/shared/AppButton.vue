<script setup lang="ts">
import ExternalLinkIcon from "@/assets/icons/external_link.svg?component";
import type { RouterLinkProps } from "vue-router";

withDefaults(
  defineProps<{
    text: string;
    variant: "primary" | "secondary" | "neutral" | "black";
    type?: "external_link" | "button" | "submit";
    link?: RouterLinkProps["to"];
  }>(),
  { type: "button", link: undefined },
);
</script>

<template>
  <a
    v-if="type === 'external_link'"
    :class="variant"
    :href="link?.toString()"
    target="_blank"
  >
    {{ text }}
    <ExternalLinkIcon
      v-if="type === 'external_link'"
      class="external-icon"
      aria-hidden="true"
      width="16"
      height="16"
    />
  </a>
  <router-link v-else-if="link" :class="variant" :to="link">{{
    text
  }}</router-link>
  <button v-else :class="variant" :type="type">{{ text }}</button>
</template>

<style lang="scss" scoped>
button,
a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &.primary {
    background-color: hsl(var(--primary-700));
    color: white;
    &:hover {
      background-color: hsl(var(--primary-800));
    }
  }

  &.secondary {
    background-color: hsl(var(--secondary-700));
    color: white;

    &:hover {
      background-color: hsl(var(--secondary-800));
    }
  }

  &.neutral {
    background-color: hsl(var(--neutral-200));
    color: hsl(var(--neutral-900));

    &:hover {
      background-color: hsl(var(--neutral-300));
    }
  }

  &.black {
    background-color: hsl(var(--neutral-900));
    color: white;

    &:hover {
      background-color: hsl(var(--neutral-800));
    }
  }

  .external-icon {
    flex-shrink: 0;
    margin-inline-start: 0.5rem;
  }
}
</style>
