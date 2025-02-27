<script setup lang="ts">
import CalendarIcon from "@/assets/icons/calendar.svg";
import HourglassIcon from "@/assets/icons/hourglass.svg";
import PinIcon from "@/assets/icons/pin.svg";
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <h1>
          <span class="green">Green</span> Code Challenge <small>2025</small>
        </h1>
        <div class="registration">
          <HourglassIcon width="18" height="18" />
          Inscriptions bientôt ouvertes
        </div>
      </div>
      <div class="meta-info">
        <a
          href="https://maps.app.goo.gl/gezGPcSxkv8r2LA88"
          class="badge"
          target="_blank"
        >
          <PinIcon width="18" height="18" />
          La Belleviloise, 19-21 rue Boyer, 75020 Paris
        </a>

        <div class="badge bold">
          <CalendarIcon width="18" height="18" />
          20 et 21 Mai 2025
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;

  background: linear-gradient(
    200deg,
    hsl(var(--secondary-400)) -13%,
    hsl(var(--secondary-700)) 87%
  );
  box-shadow: var(--shadow-border-small);

  .content {
    display: flex;
    flex-direction: column;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    gap: 32px;

    .top {
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      h1 {
        color: white;
        font-size: 3rem;

        .green {
          color: hsl(var(--primary-300));
        }

        small {
          font-size: 1.5rem;
        }
      }

      .registration {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        gap: 8px;
        white-space: nowrap;

        background: #e5e5e5;
        border-radius: 100px;

        cursor: not-allowed;
      }

      @media screen and (max-width: 960px) {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .meta-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      .badge {
        display: flex;
        align-items: center;
        padding: 6px 8px;
        gap: 10px;

        background: rgba(0, 0, 0, 0.2);
        color: white;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;

        &.bold {
          font-weight: 700;
        }
      }

      a.badge:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media screen and (max-width: 960px) {
    padding: 2rem 1rem;
  }
}
</style>
