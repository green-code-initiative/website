<script setup lang="ts">
interface Tab {
  id: string;
  label: string;
}

defineProps<{ tabs: Tab[]; modelValue: string }>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="tabs" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab', { active: modelValue === tab.id }]"
      :aria-selected="modelValue === tab.id"
      @click="emit('update:modelValue', tab.id)"
      type="button"
      role="tab"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  align-items: flex-start;
  padding: 0.25rem;
  gap: 0.25rem;
  background: hsl(var(--neutral-100));
  border-radius: 0.5rem;
  width: fit-content;
}

.tab {
  padding: 0.375rem 2rem;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  flex: 1;
  font-size: 0.875rem;
  font-weight: 700;

  &.active {
    background: #ffffff;
  }
}
</style>
