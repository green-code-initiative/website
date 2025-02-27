<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ name: string; to: string; icon?: any }>();

const isExternal = computed(() => props.to.startsWith("http"));
</script>

<template>
  <a v-if="isExternal" :href="to" v-bind="$attrs">
    <component v-if="icon" :is="icon" width="20" height="20" />
    {{ name }}
  </a>
  <router-link v-else :to="to">
    <component v-if="icon" :is="icon" width="20" height="20" />
    {{ name }}
  </router-link>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  gap: 0.5rem;
  font-weight: bold;
  align-items: center;

  color: inherit;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: background-color 0.08s ease-in-out;

  &.highlighted {
    background: linear-gradient(
      160deg,
      hsl(var(--secondary-700)) -23%,
      hsl(var(--secondary-500)) 86%
    );
    color: white;

    &:hover,
    &.router-link-active {
      background: linear-gradient(
        160deg,
        hsl(var(--secondary-900)) -23%,
        hsl(var(--secondary-700)) 86%
      );
    }
  }

  &:hover,
  &.router-link-active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
