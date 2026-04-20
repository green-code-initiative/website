<script setup lang="ts">
import {
  date,
  edition,
  location,
  registration,
} from "@/assets/data/challenge.json";
import BackpackIcon from "@/assets/icons/backpack.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import ExternalLinkIcon from "@/assets/icons/external_link.svg";
import HeartHandshakeIcon from "@/assets/icons/heart_handshake.svg";
import PinIcon from "@/assets/icons/pin.svg";
import TicketCheckIcon from "@/assets/icons/ticket_check.svg";
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <h1>
          <span class="green">Green</span> Code Challenge
          <small>{{ edition }}</small>
        </h1>
        <a
          v-if="registration.status === 'open'"
          :href="registration.url"
          class="registration"
          target="_blank"
          >Je m'inscris <ExternalLinkIcon width="18" height="18"
        /></a>
        <div
          v-else-if="registration.status === 'full'"
          class="registration full"
        >
          <TicketCheckIcon width="24" height="24" />
          Événement complet
          <div class="thank">Merci !</div>
        </div>
        <a
          v-else-if="registration.status === 'onboarding'"
          href="https://github.com/green-code-initiative/creedengo-challenge"
          class="registration onboarding"
          target="_blank"
          ><BackpackIcon width="24" height="24" /> Accéder au Starter pack</a
        >
      </div>
      <div class="meta-info">
        <a :href="location.url" class="badge" target="_blank">
          <PinIcon width="18" height="18" />
          {{ location.name }}
        </a>

        <div class="line">
          <div class="badge bold">
            <CalendarIcon width="18" height="18" />
            {{ date }}
          </div>
          <div class="badge">
            <HeartHandshakeIcon width="18" height="18" />
            Gratuit et ouvert à tous
          </div>
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
        position: relative;
        align-items: center;
        padding: 8px 16px;
        gap: 8px;
        white-space: nowrap;

        background: hsl(var(--primary-300));
        color: hsl(var(--text-neutral));
        font-weight: bold;
        border-radius: 100px;

        &:not(.full):hover {
          background: hsl(var(--primary-400));
        }

        &.full {
          background: black;
          color: white;
        }

        .thank {
          position: absolute;
          padding: 4px 8px;
          right: -10px;
          bottom: -20px;

          background: hsl(var(--primary-300));
          color: hsl(var(--text-neutral));
          border-radius: 100px;

          font-weight: 600;

          transform: rotate(-5deg);
        }
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

      .line {
        display: flex;
        gap: 0.5rem;

        @media screen and (max-width: 960px) {
          flex-direction: column;
          align-items: flex-start;
        }
      }

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
