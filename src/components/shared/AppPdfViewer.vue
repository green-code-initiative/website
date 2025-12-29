<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ pdfUrl: string }>();

// Add parameters to show minimal controls
const pdfUrlWithParams = computed(() => {
  if (!props.pdfUrl) return undefined;
  const separator = props.pdfUrl.includes("?") ? "&" : "#";
  return `${props.pdfUrl}${separator}navpanes=0&scrollbar=1`;
});
</script>

<template>
  <iframe
    v-if="pdfUrl"
    :src="pdfUrlWithParams"
    type="application/pdf"
    title="Document PDF"
  />
</template>

<style scoped>
iframe {
  width: 100%;
  max-width: 900px;
  height: 70vh;
  min-height: 600px;
  margin: 2rem auto;
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  iframe {
    height: 70vh;
    min-height: 500px;
  }
}
</style>
