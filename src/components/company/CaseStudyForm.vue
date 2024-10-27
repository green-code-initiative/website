<template>
  <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
    <Fieldset>
      <Textfield
        id="lastname"
        name="lastname"
        label="Nom :"
        autocomplete="family-name"
      />
      <Textfield
        id="firstname"
        name="firstname"
        label="Prénom :"
        autocomplete="given-name"
      />
    </Fieldset>

    <Textfield
      id="company"
      name="company"
      label="Organisation :"
      autocomplete="organization"
    />
    <Textfield
      id="role"
      name="role"
      label="Rôle :"
      autocomplete="organization-title"
    />

    <Fieldset>
      <Textfield
        id="email"
        name="email"
        type="email"
        label="E-mail * :"
        required
        autocomplete="email"
      />
      <Textfield
        id="phone"
        name="phone"
        type="tel"
        label="Téléphone :"
        autocomplete="tel"
      />
    </Fieldset>

    <Textfield
      id="message"
      type="textarea"
      name="message"
      label="Votre besoin :"
    />

    <div class="form-submit">
      <div class="error-message" v-if="error" aria-live="assertive">
        {{ error }}
      </div>
      <div
        style="margin-top: 15px"
        class="success-message"
        v-if="success"
        aria-live="assertive"
      >
        {{ success }}
      </div>

      <AppButton
        type="submit"
        variant="primary"
        text="Recevez notre cas client"
        aria-label="Soumettez le formulaire"
      />
    </div>

    <altcha-widget
      :challengeurl="captchaChallengeUrl"
      name="captcha"
      spamfilter
      floating
    />
  </form>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import Fieldset from "@/components/shared/form/AppFieldset.vue";
import Textfield from "@/components/shared/form/AppTextfield.vue";
import { captchaChallengeUrl, post } from "@/util/fetch";
import { extractFormData, validatePhone } from "@/util/form";
import { ref } from "vue";

const error = ref("");
const success = ref("");

const submitForm = async (event: Event) => {
  const form = event.target as HTMLFormElement;
  const formData = extractFormData(form);

  if (validatePhone(formData.phone as string, error)) {
    try {
      await post("client_case", formData);
      success.value = "Votre demande a bien été enregistrée";
      form.reset();
    } catch {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
    }
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 796px) {
    width: 768px;
  }
}
</style>
