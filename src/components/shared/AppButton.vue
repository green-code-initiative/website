<script setup lang="ts">
import type { RouterLinkProps } from "vue-router";

withDefaults(
  defineProps<{
    text: string;
    variant: "primary" | "secondary" | "neutral" | "black";
    type?: "external_link" | "button" | "submit";
    link?: RouterLinkProps["to"];
  }>(),
  { type: "button", link: undefined }
);
</script>

<template>
  <router-link
    v-if="link && type !== 'external_link'"
    :class="variant"
    :to="link"
    >{{ text }}</router-link
  >
  <a
    v-else-if="type === 'external_link'"
    :class="variant"
    :href="link.toString()"
    target="_blank"
    >{{ text }}</a
  >
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
    color: hsl(var(--text-neutral));

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
}
</style>
