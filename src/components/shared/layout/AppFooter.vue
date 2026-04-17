<template>
  <footer>
    <div class="footer-content">
      <span class="text-footer">Initié avec 💚 en France en 2019</span>
      <router-link to="/mentions-legales" class="legal-link">
        Mentions légales
      </router-link>
    </div>
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
  padding: 1rem 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
}

.text-footer {
  font-weight: bold;
  font-style: italic;
}

.legal-link {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
}
</style>
