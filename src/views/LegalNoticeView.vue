<template>
  <main class="legal-notice">
    <div class="container">
      <h1>Mentions légales</h1>

      <section class="legal-section">
        <h2>Éditeur du site</h2>
        <p>
          Le présent site web est édité par l'association
          <strong>Green Code Initiative</strong>.
        </p>
        <p>
          <strong>Forme juridique :</strong> Association loi 1901<br />
          <strong>Numéro RNA :</strong> W643013493<br />
          <strong>Numéro SIREN :</strong> 103496618
        </p>
      </section>

      <section class="legal-section">
        <h2>Siège social</h2>
        <p>
          UNIVERSITÉ DE PAU ET DES PAYS DE L'ADOUR<br />
          AVENUE DE L'UNIVERSITÉ<br />
          64000 PAU<br />
          FRANCE
        </p>
      </section>

      <section class="legal-section">
        <h2>Contact</h2>
        <p>
          Pour toute question ou demande d'information concernant le site, vous
          pouvez nous contacter à l'adresse suivante :
        </p>
        <p>
          <strong>Email :</strong>
          <a href="mailto:contact@green-code-initiative.org"
            >contact@green-code-initiative.org</a
          >
        </p>
      </section>

      <section class="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, graphismes, logo,
          icônes, etc.) est la propriété exclusive de l'association Green Code
          Initiative, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, distribution, modification, adaptation,
          retransmission ou publication de ces différents éléments est
          strictement interdite sans l'accord exprès par écrit de Green Code
          Initiative.
        </p>
      </section>

      <section class="legal-section">
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé conformément aux standards de l'industrie et aux
          réglementations en vigueur.
        </p>
      </section>

      <section class="legal-section">
        <h2>Protection des données personnelles</h2>
        <p>
          Conformément à la loi n°78-17 du 6 janvier 1978 relative à
          l'informatique, aux fichiers et aux libertés, modifiée par la loi
          n°2004-801 du 6 août 2004, et au Règlement Général sur la Protection
          des Données (RGPD) du 27 avril 2016, vous disposez d'un droit
          d'accès, de rectification, de suppression et d'opposition aux données
          personnelles vous concernant.
        </p>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter à l'adresse :
          <a href="mailto:contact@green-code-initiative.org"
            >contact@green-code-initiative.org</a
          >
        </p>
      </section>

      <section class="legal-section">
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l'expérience
          utilisateur et réaliser des statistiques de visite. Vous pouvez
          configurer votre navigateur pour refuser les cookies, mais certaines
          fonctionnalités du site peuvent être impactées.
        </p>
      </section>

      <section class="legal-section">
        <h2>Limitation de responsabilité</h2>
        <p>
          Green Code Initiative s'efforce d'assurer l'exactitude et la mise à
          jour des informations diffusées sur ce site, mais ne peut garantir
          l'exactitude, la précision ou l'exhaustivité des informations mises à
          disposition.
        </p>
        <p>
          En conséquence, l'association décline toute responsabilité pour toute
          imprécision, inexactitude ou omission portant sur des informations
          disponibles sur le site.
        </p>
      </section>

      <section class="legal-section">
        <h2>Loi applicable</h2>
        <p>
          Les présentes mentions légales sont régies par la loi française. Tout
          litige relatif à l'utilisation du site est soumis à la compétence
          exclusive des tribunaux français.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Mentions légales - Green Code Initiative";
});
</script>

<style lang="scss" scoped>
.legal-notice {
  padding: 2rem 0;
  min-height: calc(100vh - 120px);

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    text-align: center;
  }

  .legal-section {
    margin-bottom: 2.5rem;

    h2 {
      font-size: 1.5rem;
      color: var(--color-secondary);
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: 0.5rem;
    }

    p {
      line-height: 1.8;
      margin-bottom: 1rem;
      color: var(--color-text);

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }

    strong {
      font-weight: 600;
      color: var(--color-text);
    }
  }
}

@media (max-width: 768px) {
  .legal-notice {
    padding: 1rem 0;

    h1 {
      font-size: 2rem;
    }

    .legal-section h2 {
      font-size: 1.25rem;
    }
  }
}
</style>
