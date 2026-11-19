<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    logo: { filename: string; width: number; height: number };
    variant?: "default" | "card" | "featured";
    roleLabel?: string;
  }>(),
  { variant: "default", roleLabel: undefined },
);
</script>

<template>
  <div class="container" :class="variant">
    <div class="image">
      <img
        :src="'/img/organizations/' + logo.filename"
        :width="logo.width"
        :height="logo.height"
        :alt="'Logo ' + name"
        loading="lazy"
        decoding="async"
      />
    </div>
    <p class="name">{{ name }}</p>
    <p v-if="roleLabel" class="role-label">{{ roleLabel }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-border-small);
  background-color: hsl(var(--neutral-0));
}

.name {
  font-size: 0.875rem;
  text-align: center;
  white-space: pre-wrap;
}

.card,
.featured {
  height: 100%;
  padding: 1rem;
  border: 1px solid hsl(var(--surface-accent));
  border-radius: var(--radius);
  background: hsl(var(--card));

  .image {
    width: 100%;
    box-shadow: none;

    img {
      max-width: calc(100% - 1rem);
      height: auto;
      max-height: 90px;
      object-fit: contain;
    }
  }

  .name {
    margin-top: 0.5rem;
    font-weight: 800;
    overflow-wrap: anywhere;
  }
}

.featured {
  padding: 1.5rem;
  border-color: hsl(var(--secondary-300));
  background: hsl(var(--secondary-300) / var(--gradient-opacity));

  .image {
    height: 144px;
  }

  .name {
    font-size: 1rem;
  }
}

.role-label {
  color: hsl(var(--text-accent));
  font-size: 0.8125rem;
  text-align: center;
}

@media (max-width: 768px) {
  .card,
  .featured {
    padding: 0.75rem;
  }

  .featured .image {
    height: 120px;
  }
}
</style>
