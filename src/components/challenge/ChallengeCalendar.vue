<script lang="ts" setup>
import ChallengeCalendarEvent from "@/components/challenge/ChallengeCalendarEvent.vue";
import AppButton from "@/components/shared/AppButton.vue";
import data from "@/assets/data/challenge-calendar.json";
import { computed, ref } from "vue";

const currentDateId = ref(data.dates[0].id);
const events = computed(
  () => data.dates.find((date) => date.id === currentDateId.value)?.events ?? []
);
</script>

<template>
  <div class="calendar">
    <h2>Le planning</h2>
    <div class="header">
      <div class="caption">
        <div v-for="eventType in data.eventTypes" :key="eventType.id">
          <span class="event-badge" :class="eventType.id"></span>
          <p>{{ eventType.name }}</p>
        </div>
      </div>
      <div class="dates">
        <AppButton
          v-for="date in data.dates"
          :key="date.id"
          :variant="currentDateId === date.id ? 'secondary' : 'neutral'"
          :text="date.title"
          @click.prevent="currentDateId = date.id"
        />
      </div>
    </div>
    <div class="events">
      <div v-for="(event, index) in events" class="event-timeline" :key="index">
        <ChallengeCalendarEvent :event="event" />
        <div class="children" v-if="event.children">
          <ChallengeCalendarEvent
            v-for="(childEvent, childIndex) in event.children"
            :key="childIndex"
            :child="true"
            :event="childEvent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.calendar {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }

  .header {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;

    .caption {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;

      & > div {
        display: flex;
        align-items: center;
        white-space: nowrap;
        gap: 0.5rem;
      }
    }

    .dates {
      display: flex;
      gap: 1rem;
    }

    @media (min-width: 960px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .caption {
        gap: 2rem;
      }
    }
  }

  .events {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .event-timeline {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .children {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        margin-left: 2rem;

        &:before {
          content: "";
          position: absolute;
          left: -1rem;
          top: -0.5rem;
          width: 2px;
          height: calc(100% + 1rem);
          border-left: 2px dashed hsl(var(--neutral-300));
        }
      }
    }
  }

  .event-badge {
    width: 16px;
    height: 16px;

    &.teamwork {
      background-color: hsl(var(--primary-500));
      border-radius: 50%;
    }
    &.conference {
      background-color: hsl(var(--secondary-500));
    }
    &.animation {
      width: 0;
      height: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-bottom: 16px solid #e94242; // custom color for now
    }
    &.break {
      border: 2px solid hsl(var(--neutral-400));
      border-radius: 50%;
    }
  }
}
</style>
