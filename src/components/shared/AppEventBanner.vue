<script setup lang="ts">
import MegaphoneIcon from "@/assets/icons/megaphone.svg";

defineProps({
  title: { type: String, default: null },
  content: { type: String, default: null },
  action: { type: Object, default: null },
});
</script>

<template>
  <div class="banner-container" role="alert">
    <div class="title">
      <MegaphoneIcon width="32" height="32" class="icon" />
      <h2>{{ title }}</h2>
    </div>
    <p v-html="content"></p>
    <a type="button" :href="action.link" target="_blank">{{ action.label }}</a>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  --color-1: 91, 83, 201;
  --color-2: 74, 83, 161;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  max-width: 720px;
  border-radius: 0.5rem;
  background: linear-gradient(
    30deg,
    rgb(var(--color-1)) 0%,
    rgb(var(--color-2)) 100%
  );
  color: white;
  animation: pulse 2s infinite;

  .title {
    display: flex;
    gap: 1rem;
    align-items: center;

    .icon {
      color: var(--color-additionnal-1);
      transform: rotate(-15deg);

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  * {
    color: inherit;
    text-align: left;
  }

  a[type="button"] {
    align-self: flex-end;
    color: white;
    background: #171717;
    border-radius: 100px;
    padding: 0.5rem 1rem;
    font-weight: 700;

    &:hover {
      background: #1a1a1a;
    }
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--color-1), 0.4);
    box-shadow: 0 0 0 0 rgba(var(--color-1), 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(var(--color-1), 0);
    box-shadow: 0 0 0 10px rgba(var(--color-1), 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--color-1), 0);
    box-shadow: 0 0 0 0 rgba(var(--color-1), 0);
  }
}
</style>
