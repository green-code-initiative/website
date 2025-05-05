<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 78 86">
      <path
        fill="currentColor"
        d="M35 1.3094C37.4752 -0.119661 40.5248 -0.119661 43 1.3094L73.1051 18.6906C75.5803 20.1197 77.1051 22.7607 77.1051 25.6188V60.3812C77.1051 63.2393 75.5803 65.8803 73.1051 67.3094L43 84.6906C40.5248 86.1197 37.4752 86.1197 35 84.6906L4.89488 67.3094C2.41967 65.8803 0.894882 63.2393 0.894882 60.3812V25.6188C0.894882 22.7607 2.41967 20.1197 4.89488 18.6906L35 1.3094Z"
      />
    </svg>
    <p>{{ name }}</p>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 88px;
  height: 88px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    color: hsl(var(--neutral-200));
    width: 100%;
    height: 100%;
  }

  p {
    font-weight: bold;
    z-index: 1;
  }
}
</style>
