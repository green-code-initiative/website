<script lang="ts" setup>
import RulesFilters from "./RulesFilters.vue";
import AppCircleCross from "@/assets/icons/xmark.svg";
import type { RuleFilters } from "@/composables/rule-filters";
import { nextTick, onMounted, onUnmounted, watch } from "vue";

const { meta } = defineProps<{ meta: RuleMeta }>();
const filters = defineModel<RuleFilters>("filters", { required: true });
const show = defineModel<boolean>("show", { default: false });

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  document.body.style.overflow = "";
});

watch(
  () => show.value,
  async (isOpen) => {
    await nextTick();

    document.body.style.overflow = isOpen ? "hidden" : "";
  },
);

const onResize = () => {
  if (show.value && window.innerWidth > 920) {
    show.value = false;
  }
};
</script>

<template>
  <div v-if="show" class="overlay"></div>
  <div v-if="show" class="dialog">
    <button class="close" type="button" @click="show = false">
      <AppCircleCross width="1.5rem" height="1.5rem" />
    </button>

    <div class="content">
      <RulesFilters :meta="meta" v-model="filters" class="filters" />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: hsl(var(--background));
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
}

.close {
  all: unset;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: hsl(var(--text-neutral));
}

.content {
  flex: 1;
  overflow-y: none;
  margin: 1.5rem;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  .filters {
    height: 40dvh;
    overscroll-behavior: contain;
  }
}

.overlay {
  z-index: 1000;
  background: hsl(var(--accent));
  opacity: 70%;
  position: fixed;
  top: 0px;
  height: 50%;
  width: 100%;
}
</style>
