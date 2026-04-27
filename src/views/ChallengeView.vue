<script setup lang="ts">
// import ChallengeCalendar from "@/components/challenge/ChallengeCalendar.vue";
import ChallengeContact from "@/components/challenge/ChallengeContact.vue";
import ChallengeGoals from "@/components/challenge/ChallengeGoals.vue";
import ChallengeHero from "@/components/challenge/ChallengeHero.vue";
import ChallengeHistory from "@/components/challenge/ChallengeHistory.vue";
import ChallengeSponsors from "@/components/challenge/ChallengeSponsors.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "Challenge 2026 - Green Code Initiative",
  meta: [
    {
      name: "description",
      content:
        "Retrouvez-nous cette année pour (re)découvrir la Green Code Initiative et collaborer au développement de logiciels bas carbone ! Rendez-vous du 19 au 20 mai 2026 !",
    },
  ],
});
</script>

<template>
  <div>
    <ChallengeHero />
    <section>
      <div class="ambition">
        <img src="@/assets/img/challenge/ambition.webp" alt="" width="520" />
        <div class="content">
          <h2>Une ambition</h2>
          <p>
            Rejoignez-nous pour un <b>hackathon unique</b> où des passionnés de
            tout horizon se réuniront pour faire avancer le numérique
            responsable ! Nous avons tous un point commun : la volonté de
            contribuer à un
            <b>avenir numérique plus respectueux de l’environnement</b>.
          </p>
        </div>
      </div>
    </section>
    <section>
      <ChallengeGoals />
    </section>
    <!-- <section id="planning">
      <ChallengeCalendar />
    </section> -->
    <section class="neutral">
      <ChallengeSponsors />
    </section>
    <section>
      <ChallengeHistory />
    </section>
    <section>
      <ChallengeContact />
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;

  & > div {
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
  }

  &.neutral {
    background-color: hsl(var(--accent));
    box-shadow: var(--shadow-border-small);
  }

  @media (min-width: 768px) {
    gap: 4rem;
    padding: 4rem 1rem;
  }
}

.ambition {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 2rem;
      font-weight: 800;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 960px) {
    gap: 2rem;

    img {
      max-width: 420px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    img {
      max-width: 100%;
    }

    .content {
      text-align: center;
    }
  }
}
</style>
