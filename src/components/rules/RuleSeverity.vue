<script lang="ts" setup>
import CircleChevronDownIcon from "@/assets/icons/circle_chevron_down.svg?component";
import CircleChevronUpIcon from "@/assets/icons/circle_chevron_up.svg?component";
import CircleChevronsUpIcon from "@/assets/icons/circle_chevrons_up.svg?component";
import CircleX from "@/assets/icons/circle_x.svg?component";
import InfoIcon from "@/assets/icons/info.svg?component";
import { type Component, computed } from "vue";

const icons: Record<Rule["severity"], Component> = {
  INFO: InfoIcon,
  MINOR: CircleChevronDownIcon,
  MAJOR: CircleChevronUpIcon,
  CRITICAL: CircleChevronsUpIcon,
  BLOCKER: CircleX,
} as const;

const props = defineProps<{ severity: Rule["severity"] }>();
const icon = computed(() => icons[props.severity]);
</script>

<template>
  <div class="rule-severity" :class="severity.toLowerCase()">
    {{ severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase() }}
    <component :is="icon" />
  </div>
</template>

<style lang="scss" scoped>
.rule-severity {
  --background-opacity: 0.5;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: hsl(var(--background-color) / var(--background-opacity));

  svg {
    width: 20px;
    height: 20px;
    color: hsl(var(--icon-color));
  }

  &.info,
  &.minor {
    --background-color: 198 100% 76%;
    --icon-color: 198 34% 34%;
  }

  &.major {
    --background-color: 36 100% 76%;
    --icon-color: 36 41% 42%;
  }

  &.critical {
    --background-color: 0 100% 76%;
    --icon-color: 3 41% 42%;
  }

  &.blocker {
    --background-color: 0 0% 70%;
    --icon-color: 0 0% 30%;
  }

  @media (prefers-color-scheme: dark) {
    --background-opacity: 0.2;

    &.info,
    &.minor {
      --icon-color: 198 60% 70%;
    }

    &.major {
      --icon-color: 36 70% 70%;
    }

    &.critical {
      --icon-color: 3 70% 70%;
    }

    &.blocker {
      --icon-color: 0 0% 70%;
    }
  }
}
</style>
