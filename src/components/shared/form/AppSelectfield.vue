<script setup lang="ts">
defineEmits(["update:modelValue"]);
defineOptions({ inheritAttrs: false });
defineProps<{
  id: string;
  label: string;
  modelValue: string;
  items: string[];
}>();
</script>

<template>
  <label :for="id" class="app-selectfield">
    {{ label }}
    <div class="container">
      <select
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :id="id"
        v-bind="$attrs"
      >
        <option v-for="item in items" :key="item">{{ item }}</option>
      </select>
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path
          d="M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 00-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  </label>
</template>

<style scoped lang="scss">
.app-selectfield {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: hsl(var(--secondary-700));
  font-size: 18px;
  font-weight: 900;

  & > .container {
    position: relative;
    height: 56px;
    background-color: hsl(var(--accent));
    border-radius: 0.5rem;
    border: solid 1px #d8dae5;
    transition: box-shadow 0.08s ease-in-out;
    overflow: hidden;

    & > select {
      background: none;
      appearance: none;
      border: none;
      color: hsl(var(--text-neutral));
      outline: none;
      width: 100%;
      padding: 1rem 3rem 1rem 1rem;
      font-size: 18px;

      option {
        color: initial;
      }
    }

    & > svg {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 24px;
      height: 24px;
      color: hsl(var(--secondary-700));
      pointer-events: none;
    }

    &:focus,
    &:focus-within {
      border-color: hsl(var(--secondary-500));
    }
  }
}
</style>
