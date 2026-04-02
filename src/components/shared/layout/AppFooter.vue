<template>
  <footer>
    <span class="text-footer">Initié avec 💚 en France en 2019</span>
  </footer>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  height: 60px;
  background-color: hsl(var(--background));
  box-shadow: var(--shadow-border-small);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.text-footer {
  font-weight: bold;
  font-style: italic;
}
</style>
