<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    backgroundColor?: "white" | "grey";
    container?: boolean;
  }>(),
  {
    title: undefined,
    subTitle: undefined,
    backgroundColor: "white",
    container: false,
  },
);
</script>

<template>
  <div class="section" :class="backgroundColor">
    <h2 class="heading-2" v-if="title">{{ title }}</h2>
    <p class="sub-title" v-if="subTitle">{{ subTitle }}</p>
    <div v-if="container" :class="{ container }">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;

  .heading-2,
  .sub-title {
    text-align: center;
  }

  .sub-title {
    font-size: 1.25rem;
    color: hsl(var(--text-accent));
    max-width: 820px;
  }

  &.grey {
    background-color: hsl(var(--surface));
  }

  .container {
    width: 100%;
    /* 1080px + 2 x 1rem */
    max-width: 1112px;
    padding: 0 1rem;
  }
}
</style>
