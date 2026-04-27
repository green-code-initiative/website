<script setup lang="ts">
import BracesIcon from "@/assets/icons/braces.svg";
import Building2Icon from "@/assets/icons/building_2.svg";
import HandHeartIcon from "@/assets/icons/hand_heart.svg";
import LeafIcon from "@/assets/icons/leaf.svg";
import MicroscopeIcon from "@/assets/icons/microscope.svg";
import UsersIcon from "@/assets/icons/users.svg";
import ViewIcon from "@/assets/icons/view.svg";
import CreedengoScreenshot from "@/assets/img/screenshot.webp";
import Creedengo from "@/assets/img/creedengo.svg";
import CreedengoTechnology from "@/components/home/CreedengoTechnology.vue";
import AppButton from "@/components/shared/AppButton.vue";
import AppCard from "@/components/shared/AppCard.vue";
</script>

<template>
  <div class="creedengo-intro">
    <p class="created">Nous avons créé</p>

    <div class="logo-container">
      <Creedengo width="358" class="hero" role="img" aria-label="Creedengo" />
      <p class="old-name">ex. <strong>ecoCode</strong></p>
    </div>

    <p class="description">
      Un outil basé sur notre référentiel de règles d'éco-conception logicielle
    </p>

    <div class="feature-grid">
      <AppCard class="large">
        <div class="title-container">
          <ViewIcon />
          <p class="title">
            Il identifie les <span class="underlined">défauts</span> de votre
            code source
          </p>
        </div>
        <p class="description">
          Une collection de plugins pour
          <strong>SonarQube</strong> afin d'analyser votre base de code.
        </p>
        <img
          :src="CreedengoScreenshot"
          alt="Screenshot of Creedengo inside SonarQube"
          width="871"
          height="200"
        />
      </AppCard>
      <AppCard variant="primary" padding="comfortable">
        <LeafIcon />
        <p class="title">
          Il vous aide à limiter l'<strong>impact écologique</strong> de vos
          programmes
        </p>
      </AppCard>
      <AppCard padding="comfortable">
        <HandHeartIcon />
        <p class="title">Il est open-source et<br />complètement gratuit</p>
      </AppCard>
      <AppCard variant="secondary">
        <div class="title-container">
          <UsersIcon />
          <p class="title">Il tire sa force du collectif</p>
        </div>

        <div class="network">
          <div class="node" style="top: -0.2rem; left: -1.7rem">
            <div class="icon"><Building2Icon /></div>
            <p>Entreprises</p>
          </div>
          <div class="node" style="top: 1.8rem; right: -2.6rem">
            <div class="icon"><MicroscopeIcon /></div>
            <p>Laboratoires</p>
          </div>
          <div class="node" style="bottom: -1.4rem; left: 0.8rem">
            <div class="icon"><UsersIcon /></div>
            <p>Individuels</p>
          </div>
        </div>
      </AppCard>
      <AppCard>
        <div class="title-container">
          <BracesIcon />
          <p class="title">Il s’adapte à vos<br />technologies préférées</p>
        </div>
        <div class="technologies">
          <div class="line">
            <CreedengoTechnology name="Java" />
            <CreedengoTechnology name="PHP" />
            <CreedengoTechnology name="Android iOS" />
          </div>
          <div class="line">
            <CreedengoTechnology name="Python" />
            <CreedengoTechnology name="JS / TS" />
            <CreedengoTechnology name="C#" />
          </div>
        </div>
      </AppCard>
    </div>

    <AppButton
      link="/projets/creedengo"
      text="Je découvre le projet"
      variant="primary"
    />
  </div>
</template>

<style lang="scss" scoped>
.creedengo-intro {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
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
      background-color: hsl(var(--surface));
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

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
    width: 1280px;
    max-width: 100%;
    padding: 1rem;

    .title-container {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .underlined {
      text-decoration: underline;
      text-decoration-color: red;
      text-decoration-thickness: 2px;
      text-underline-offset: 2px;
      text-decoration-style: wavy;
    }

    img {
      margin-bottom: -50px;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .description {
      font-size: 1.1rem;
      font-weight: 600;
      color: hsl(var(--text-accent));
    }

    // Big icon in comfortable (focused) cards; overridden below for title icons
    svg {
      width: 96px;
      height: 96px;
    }

    .title-container svg {
      width: 28px;
      height: 28px;
    }

    .network {
      position: relative;
      align-self: center;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      margin: 1rem;
      border: 6px solid white;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      .node {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        color: hsl(var(--neutral-900));

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-bottom: -14px;

          background: white;

          svg {
            width: 24px;
            height: 24px;
            margin-bottom: 10px;
          }
        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px 8px;
          background-color: hsl(var(--neutral-100));
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 2rem;
          font-size: 14px;
        }
      }
    }

    .technologies {
      display: flex;
      flex-direction: column;
      align-self: center;

      .line {
        display: flex;

        &:nth-child(2n) {
          margin-top: -11px;
          margin-left: 44px;
        }
      }
    }

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 0;

      .large {
        grid-column: span 2;
      }
    }
  }
}
</style>
