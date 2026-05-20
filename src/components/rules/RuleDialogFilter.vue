<script lang="ts" setup>
import RulesFilters from "./RulesFilters.vue";
import AppCircleCross from "@/assets/icons/xmark.svg";
import type { RuleFilters } from "@/composables/rule-filters";
import { onMounted, onUnmounted } from "vue";

const { meta } = defineProps<{ meta: RuleMeta }>();
const filters = defineModel<RuleFilters>("filters", { required: true });
const show = defineModel<boolean>("show", { default: false });

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));

const onResize = () => {
  if (show.value && window.innerWidth > 920) {
    show.value = false;
  }
};
</script>

<template>
  <div v-if="show" class="overlay"></div>
  <div v-if="show" class="dialog">
    <div class="content">
      <div class="button-container">
        <button class="close" type="button" @click="show = false">
          <AppCircleCross width="1.5rem" height="1.5rem" />
        </button>
      </div>
      <RulesFilters :meta="meta" v-model="filters" />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(var(--background));
  max-height: 50dvh;
  width: 100%;
}

.close {
  all: unset;
  cursor: pointer;
  fill: hsl(var(--text-neutral));
}

.overlay {
  z-index: 1000;
  background: hsl(var(--accent));
  opacity: 70%;
  position: fixed;
  top: 0px;
  height: 50dvh;
  width: 100%;
}

.content {
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  max-height: 50dvh;
  padding: 0px 10px;
  border-radius: 8px;
  .filters {
    top: 0px;
    padding-bottom: 2rem;
    margin: 0 1.5rem;
  }
}

.button-container {
  position: sticky;
  top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
