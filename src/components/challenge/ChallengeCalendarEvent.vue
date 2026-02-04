<script lang="ts" setup>
interface CalendarEvent {
  type: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

defineProps<{ event: CalendarEvent; child?: boolean }>();
</script>

<template>
  <div class="event" :class="{ child }">
    <div class="type-and-time">
      <div class="type">
        <div class="event-badge" :class="event.type"></div>
      </div>
      <p class="starts-at">{{ event.startsAt }}</p>
    </div>
    <div class="content">
      <h3>{{ event.title }}</h3>
      <div v-if="event.speakers" class="speakers">
        <div
          v-for="(speaker, index) in event.speakers"
          :key="index"
          class="speaker"
        >
          <img
            v-if="speaker.avatar"
            :src="'/img/speaker/' + speaker.avatar"
            width="40"
            height="40"
            :alt="speaker.name"
          />
          <div class="text">
            <p>{{ speaker.name }}</p>
            <p v-if="speaker.title" class="title">
              {{ speaker.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p v-if="event.duration" class="duration">{{ event.duration }}</p>
  </div>
</template>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid hsl(var(--neutral-300));

  .type-and-time {
    display: flex;
    align-items: center;
  }

  .type {
    width: 2rem;
  }

  .starts-at {
    font-weight: 600;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .speakers {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .speaker {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;

        img {
          border-radius: 50%;
        }

        .title {
          font-weight: 600;
          color: hsl(var(--text-accent));
        }
      }
    }
  }

  .duration {
    font-weight: 600;
    color: hsl(var(--text-accent));
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;

    .type {
      width: 5rem;
    }

    &.child .type {
      width: 3rem;
    }

    .content {
      gap: 1rem;
    }

    .speakers {
      flex-direction: row;
      gap: 1rem;
    }
  }
}
</style>
