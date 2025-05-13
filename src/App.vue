<script setup lang="ts">
import { RouterView } from "vue-router";
import { top as topBanner } from "@/assets/data/banners.json";
import Banner from "@/components/shared/layout/AppBanner.vue";
import Header from "@/components/shared/layout/AppHeader.vue";
import Footer from "@/components/shared/layout/AppFooter.vue";
</script>

<template>
  <Banner v-if="topBanner.enable" v-bind="topBanner" />
  <Header />
  <RouterView />
  <Footer />
</template>
