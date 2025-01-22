<script setup lang="ts">
import AppSection from "../shared/AppSection.vue";
</script>

<template>
  <AppSection
    title="Rejoins Creedengo !"
    sub-title="Rejoins-nous et contribue à faire du numérique un domaine plus durable."
    background-color="grey"
  >
    <p>Tu souhaites contribuer sans plus attendre ? Rejoins-nous sur</p>
    <div class="links">
      <a href="https://github.com/green-code-initiative" target="_blank">
        <img
          width="120"
          height="32"
          src="@/assets/img/github.webp"
          alt="GitHub logo"
        />
      </a>
      <a href="https://green-code-initiative.slack.com/" target="_blank">
        <img
          width="122"
          height="32"
          src="@/assets/img/slack.webp"
          alt="GitHub logo"
        />
      </a>
    </div>
  </AppSection>
</template>

<style scoped lang="scss">
p {
  text-align: center;
}

.links {
  display: flex;
  gap: 4rem;
}
</style>
