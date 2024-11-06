<script setup lang="ts">
import { RouterView } from "vue-router";
import Banner from "@/components/shared/layout/AppBanner.vue";
import Header from "@/components/shared/layout/AppHeader.vue";
import Footer from "@/components/shared/layout/AppFooter.vue";
</script>

<template>
  <Banner />
  <Header />
  <RouterView />
  <Footer />
</template>
