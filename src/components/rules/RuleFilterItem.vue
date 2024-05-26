<script lang="ts" setup>
const isChecked = defineModel<boolean>();
defineProps<{ id: string; label: string }>();
</script>

<template>
  <label class="filter-item" :for="id">
    <input :id="id" type="checkbox" v-model="isChecked" />
    {{ label.charAt(0).toUpperCase() + label.slice(1).toLowerCase() }}
  </label>
</template>

<style lang="scss" scoped>
.filter-item {
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background-color: hsl(0 0% 91% / 50%);
  padding: 0.5rem 1rem;

  font-weight: bold;
  flex-basis: 100%;
  user-select: none;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: pointer;
  }

  &:hover {
    background-color: hsl(0 0% 91%);
  }

  input[type="checkbox"] {
    position: relative;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1.2px hsl(var(--neutral-400));
    outline-color: hsl(var(--neutral-700));
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    flex-shrink: 0;
    overflow: hidden;

    &::before {
      position: absolute;
      content: "";
      width: 1rem;
      height: 1rem;
      opacity: 0;
      transition: 50ms opacity ease-in-out;
      background-color: hsl(var(--primary-700));
    }

    &::after {
      position: absolute;
      content: "";
      width: 0.6rem;
      height: 0.6rem;
      margin: 0.2rem;
      opacity: 0;
      transition: 40ms opacity ease-in-out;
      background-color: white;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
      border-color: hsl(var(--primary-700));
    }

    &:checked::before,
    &:checked::after {
      opacity: 1;
    }
  }
}
</style>
