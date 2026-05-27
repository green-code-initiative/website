<script lang="ts" setup>
import AppXIcon from "@/assets/icons/x.svg";
import type { RuleFilters } from "@/composables/rule-filters";
import { onMounted, onUnmounted } from "vue";
import RulesFilters from "./RulesFilters.vue";

const { meta } = defineProps<{ meta: RuleMeta }>();
const filters = defineModel<RuleFilters>("filters", { required: true });
const show = defineModel<boolean>("show", { default: false });

const onResize = () => {
  if (show.value && window.innerWidth > 920) {
    show.value = false;
  }
};

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));
</script>

<template>
  <div
    v-if="show"
    class="container opened"
    role="dialog"
    aria-label="Dialogue de filtres pour les règles"
  >
    <div class="dialog">
      <button
        class="close"
        type="button"
        @click="show = false"
        aria-label="Fermer la dialogue"
      >
        <AppXIcon />
      </button>

      <RulesFilters :meta="meta" v-model="filters" class="filters" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px) brightness(0.2);

  .dialog {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65%;
    background: hsl(var(--background));
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 1rem;
    gap: 1rem;
  }

  .close {
    all: unset;
    align-self: flex-end;
    cursor: pointer;
    fill: hsl(var(--text-neutral));
    border: solid 1px hsl(var(--surface-accent));
    border-radius: 0.5rem;
    padding: 0.25rem;
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    &:focus,
    &:focus-within {
      border-color: hsl(var(--text-secondary));
    }
  }
}
</style>
