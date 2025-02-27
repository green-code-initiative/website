<template>
  <div class="sponsors">
    <div class="major-sponsor">
      <p>L’événement est <strong>sponsorisé</strong> par</p>
      <img
        src="@/assets/img/challenge/credit_agricole.webp"
        width="360"
        height="107"
      />
    </div>
  </div>
</template>

<style lang="scss">
.sponsors {
  display: flex;
  justify-content: center;
  gap: 2rem;

  .major-sponsor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1.5rem;
      color: hsl(var(--text-accent));
      font-weight: 700;
      text-align: center;

      strong {
        font-weight: 900;
        color: hsl(var(--text-neutral));
      }
    }
  }
}
</style>
