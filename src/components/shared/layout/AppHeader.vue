<script setup lang="ts">
import { ref } from "vue";
import BurgerMenuButton from "@/components/shared/layout/header/BurgerMenuButton.vue";
import Logo from "@/assets/img/logo.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import SlackIcon from "@/assets/icons/slack.svg";
import NavItem from "@/components/shared/layout/header/HeaderNavItem.vue";

const isMenuOpen = ref(false);

const closeMenu = () => (isMenuOpen.value = false);

const navItems = [
  { name: "Contributeur", to: "/contributeur" },
  { name: "Entreprises", to: "/entreprise" },
  { name: "Notre collectif", to: "/collectif" },
];

const socialItems = [
  {
    label: "Suivez-nous sur Linkedin",
    link: "https://www.linkedin.com/company/green-code-initiative/",
    icon: LinkedinIcon,
  },
  {
    label: "Rejoignez notre Github",
    link: "https://github.com/green-code-initiative",
    icon: GitHubIcon,
  },
  {
    label: "Rejoignez notre Slack",
    link: "https://join.slack.com/t/green-code-initiative/shared_invite/zt-1soofawn4-Jos03e03VEQPWrw6yhgz7g",
    icon: SlackIcon,
  },
];
</script>

<template>
  <header>
    <div class="left">
      <router-link to="/" class="go-to-home">
        <div class="logo-container">
          <Logo
            width="150"
            height="32"
            alt="Green Code Initiative logo"
            @click="closeMenu"
          />
        </div>
      </router-link>
      <nav :class="{ open: isMenuOpen }">
        <nav-item
          v-for="item of navItems"
          :key="item.name"
          :name="item.name"
          :to="item.to"
          @click="closeMenu"
        />
      </nav>
    </div>
    <div class="right">
      <a
        v-for="item of socialItems"
        :key="item.label"
        :href="item.link"
        target="_blank"
        :aria-label="item.label"
      >
        <component :is="item.icon" width="24" height="24" />
      </a>
      <BurgerMenuButton v-model="isMenuOpen" class="burger-button" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  box-shadow: var(--shadow-border-small);
  z-index: 1;

  .left {
    display: flex;
    gap: 3rem;
  }

  .right {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .association {
    font-size: 0.75rem;
    color: var(--color-on-surface-light);
  }

  .go-to-home,
  .menu-burger {
    display: flex;
    align-items: center;
    color: inherit;
  }
}

nav {
  display: none;
  align-items: center;
  gap: 1.25rem;
  background-color: var(--color-surface);
}

@media screen and (min-width: 920px) {
  header {
    padding: 0 60px;
  }

  nav {
    display: flex;
  }

  .burger-button {
    display: none;
  }
}

@media screen and (max-width: 919px) {
  nav {
    display: none;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;

    &.open {
      display: flex;
    }
  }

  .right a {
    display: none;
  }
}
</style>
