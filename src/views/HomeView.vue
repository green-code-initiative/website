<script setup lang="ts">
import { event as eventBanner } from "@/assets/data/banners.json";
import Creedengo from "@/assets/img/creedengo.svg";
import PartnerOrganizationList from "@/components/collective/PartnerOrganizationList.vue";
import ContactForm from "@/components/home/ContactForm.vue";
import HomeHero from "@/components/home/HomeHero.vue";
import RuleProcess from "@/components/home/RuleProcess.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppEventBanner from "@/components/shared/AppEventBanner.vue";
import AppSection from "@/components/shared/AppSection.vue";
</script>

<template>
  <HomeHero />

  <AppEventBanner
    v-if="eventBanner.enable"
    class="event-banner-container"
    v-bind="eventBanner"
  />

  <div class="creedengo-intro">
    <p class="created">Nous avons créé</p>

    <div class="logo-container">
      <Creedengo width="358" class="hero" />
      <p class="old-name">ex. <strong>ecoCode</strong></p>
    </div>

    <p class="description">
      Un outil basé sur notre référentiel de règles d'éco-conception logicielle
    </p>
  </div>

  <AppSection
    title="Creedengo est une initiative qui prend racine dans la force du collectif"
  >
    <div class="after-block-section-2">
      <div class="container-after">
        <p>
          Creedengo rassemble différents types d'acteurs qui œuvrent ensemble
          pour rendre le numérique plus responsable : laboratoires de recherche,
          entreprises, personnes en poste sur leur temps de travail, personnes
          indépendantes sur leur temps libre...
        </p>
        <img
          src="@/assets/img/illustration/img-accueil-1.webp"
          width="300"
          height="300"
          alt=""
          loading="lazy"
        />
      </div>
      <div class="container-after">
        <img
          src="@/assets/img/illustration/img-accueil-2.webp"
          width="300"
          height="300"
          alt=""
          loading="lazy"
        />
        <p>
          Les membres contributeurs du collectif conceptualisent et implémentent
          des règles permettant de repérer les défauts de qualité du code source
          d’un projet pouvant avoir un impact écologique négatif. Le tout est
          mis à disposition en open source.
        </p>
      </div>
    </div>
  </AppSection>

  <RuleProcess />

  <AppSection
    title="Creedengo est rendu possible grâce aux nombreux acteurs impliqués"
    sub-title="Quelques structures partenaires :"
  >
    <PartnerOrganizationList :featured="true" />
    <div class="block-button-section-1">
      <AppButton
        variant="secondary"
        link="/collectif/organisations"
        text="Toutes les entreprises partenaires"
      />
      <AppButton
        variant="secondary"
        link="/collectif/membres"
        text="Tous nos membres contributeurs"
      />
    </div>
  </AppSection>

  <ContactForm />
</template>

<style lang="scss" scoped>
.block-button-section-1 {
  width: 100%;
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  &.green {
    background-color: var(--color-secondary);
  }
}

.after-block-section-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 50px 0;
}

.container-after > p {
  width: 600px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  padding: 0 97px 0 0;
}

.container-after {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container-after:nth-child(2) > p {
  text-align: left;
  padding: 0 0 0 97px;
}

.creedengo-intro {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  text-align: center;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .old-name {
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
      font-size: 1.2rem;
      color: hsl(var(--text-neutral));
      background-color: hsl(var(--neutral-200));
    }
  }

  .created {
    color: hsl(var(--text-neutral));
    font-size: 2rem;
    font-weight: bold;
  }

  .description {
    color: hsl(var(--text-accent));
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.event-banner-container {
  justify-self: center;
  margin: -3rem auto 4rem;

  @media screen and (max-width: 768px) {
    margin: -3rem 1rem 4rem;
  }
}

@media screen and (max-width: 768px) {
  .container-after > p {
    text-align: center;
    padding: 50px 100px 0 100px;
    width: 100%;
    font-size: 15px;
  }

  .container-after:nth-child(2) > p {
    text-align: center;
    padding: 0 100px 0 100px;
  }
}

@media screen and (max-width: 425px) {
  .container-after > p {
    text-align: center;
    padding: 50px 25px 0 25px;
    width: 100%;
    font-size: 15px;
  }

  .container-after:nth-child(2) > p {
    text-align: center;
    padding: 0 25px 0 25px;
  }
}

@media screen and (max-width: 920px) {
  .block-button-section-1 {
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.5rem;
  }
}
</style>
