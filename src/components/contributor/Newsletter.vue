<template>
  <AppSection
    title="Rejoins ecoCode !"
    sub-title="Rejoins-nous et contribue à faire du numérique un domaine plus durable."
    background-color="grey"
  >
    <form @submit.prevent="submitForm">
      <div class="text-field">
        <Textfield
          id="email"
          name="email"
          type="email"
          label="E-mail * :"
          required
          autocomplete="email"
          centered
        />
      </div>

      <p class="error-message" v-if="error">{{ error }}</p>
      <p class="success-message" v-if="success">{{ success }}</p>

      <AppButton
        type="submit"
        variant="primary"
        text="Recevoir les informations"
      />

      <altcha-widget
        :challengeurl="captchaChallengeUrl"
        name="captcha"
        spamfilter
        floating
      />

      <div class="join-us">
        <p>Tu souhaites contribuer sans plus attendre ? Rejoins-nous sur</p>
        <a href="https://github.com/green-code-initiative" target="_blank">
          <img
            width="120"
            height="32"
            src="@/assets/img/github.webp"
            alt="GitHub logo"
          />
        </a>
      </div>
    </form>
  </AppSection>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import Textfield from "@/components/shared/form/AppTextfield.vue";
import { captchaChallengeUrl, post } from "@/util/fetch";
import { extractFormData } from "@/util/form";
import { ref } from "vue";
import AppSection from "../shared/AppSection.vue";

const error = ref("");
const success = ref("");

const submitForm = async (event: Event) => {
  const form = event.target as HTMLFormElement;
  const formData = extractFormData(form);
  try {
    await post("newsletter", formData);
    success.value = "Votre demande a bien été enregistrée";
    form.reset();
  } catch {
    error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.text-field {
  margin: 1rem;
  width: 320px;
  max-width: 100%;
}

.join-us {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.125rem;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  .join-us {
    flex-direction: column;
    padding: 25px 25px 0;
    gap: 1rem;
  }
}
</style>
