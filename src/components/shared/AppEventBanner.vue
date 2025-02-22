<script setup lang="ts">
import MegaphoneIcon from "@/assets/icons/megaphone.svg";
import AppButton from "./AppButton.vue";

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
    <AppButton
      type="external_link"
      variant="black"
      :text="action.label"
      :link="action.link"
    />
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  --main-color: var(--secondary-700);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  max-width: 720px;
  border-radius: 0.5rem;
  background: linear-gradient(
    198.54deg,
    hsl(var(--secondary-700)) -13.88%,
    hsl(var(--secondary-400)) 87.44%
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

  a {
    align-self: flex-end;
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 hsla(var(--main-color) / 50%);
    box-shadow: 0 0 0 0 hsl(var(--main-color) / 50%);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px hsla(var(--main-color) / 0%);
    box-shadow: 0 0 0 10px hsla(var(--main-color) / 0%);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 hsla(var(--main-color) / 0%);
    box-shadow: 0 0 0 0 hsla(var(--main-color) / 0%);
  }
}
</style>
