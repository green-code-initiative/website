<script setup lang="ts">
import ExternalLinkIcon from "@/assets/icons/external_link.svg";
import PinIcon from "@/assets/icons/pin.svg";
</script>

<template>
  <div class="history">
    <h2>Challenges précédents</h2>
    <div class="events">
      <div class="event">
        <img
          src="@/assets/img/challenge/2022.webp"
          alt="Challenge 2022"
          width="384"
        />
        <div class="info">
          <h3>2-3 juin 2022</h3>
        </div>
      </div>
      <div class="event">
        <img
          src="@/assets/img/challenge/2023.webp"
          alt="Challenge 2023"
          width="384"
        />
        <div class="info">
          <h3>5-6 avril 2023</h3>
          <div class="location">
            <PinIcon width="18" height="18" />
            <span>
              40 Rue Fanfan la Tulipe<br />92100 Boulogne-Billancourt
            </span>
          </div>
          <div class="links">
            <a
              href="https://presse.credit-agricole.com/actualites/succes-confirme-pour-la-seconde-edition-d-ecocode-challenge-le-hackathon-green-it-du-credit-agricole-b8bf-9ed05.html"
              target="_blank"
              >Article de presse <ExternalLinkIcon width="16" height="16"
            /></a>
            <a
              href="https://www.davidson.fr/blog/davidson-accueille-la-deuxieme-edition-du-challenge-ecocode-dans-ses-locaux"
              target="_blank"
              >Davidson <ExternalLinkIcon width="16" height="16"
            /></a>
            <a
              href="https://glalloue.medium.com/ecocode-challenge-2023-ce-qui-sest-vraiment-passé-ff76df1ad557"
              target="_blank"
              >Blog <ExternalLinkIcon width="16" height="16"
            /></a>
          </div>
        </div>
      </div>
      <div class="event">
        <img
          src="@/assets/img/challenge/2024.webp"
          alt="Challenge 2024"
          width="384"
        />
        <div class="info">
          <h3>29-30 mai 2024</h3>
          <div class="location">
            <PinIcon width="18" height="18" />
            <span>La Faïencerie, 18 rue de Paradis<br />75010 Paris</span>
          </div>
          <div class="links">
            <a
              href="https://presse.credit-agricole.com/actualites/3eme-edition-fructueuse-de-lecocode-challenge-2cb9-9ed05.html"
              target="_blank"
              >Article de presse <ExternalLinkIcon width="16" height="16"
            /></a>
            <a
              href="https://photos.app.goo.gl/HprjHfReKZVKU6sYA"
              target="_blank"
              >Galerie photo <ExternalLinkIcon width="16" height="16"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.history {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }

  .events {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4rem;

    .event {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        max-width: 100%;
        border-radius: 16px;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: hsl(var(--text-neutral));
        }

        .location {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.25rem 0.5rem;
          font-size: 14px;
          font-weight: 600;
          border-radius: 0.5rem;
          background-color: hsl(var(--neutral-50));
          color: hsl(var(--text-accent));
        }

        .links {
          display: flex;
          gap: 2rem;
          font-weight: 700;

          a {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: hsl(var(--text-neutral));
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
