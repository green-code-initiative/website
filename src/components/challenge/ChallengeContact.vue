<script setup lang="ts">
import Alert from "@/components/shared/AppAlert.vue";
import AppButton from "@/components/shared/AppButton.vue";
import Captcha from "@/components/shared/form/AppCaptcha.vue";
import Textfield from "@/components/shared/form/AppTextfield.vue";
import { post } from "@/util/fetch";
import { extractFormData } from "@/util/form";
import { ref } from "vue";

const error = ref("");
const success = ref("");

const submitForm = async (event: Event) => {
  const form = event.target as HTMLFormElement;
  const formData = extractFormData(form);

  try {
    await post("challenge_contact", formData);
    success.value = "Votre demande a bien été enregistrée";
    form.reset();
  } catch {
    error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
  }
};
</script>

<template>
  <div class="contact">
    <h2>Contact</h2>
    <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
      <Textfield id="name" name="name" label="Nom" required />
      <Textfield id="email" name="email" type="email" label="E-mail" required />

      <Textfield
        id="message"
        type="textarea"
        name="message"
        label="Quelle est votre demande ?"
        required
      />

      <div class="form-submit" style="text-align: center">
        <Alert v-if="error" variant="error">{{ error }}</Alert>
        <Alert v-if="success" variant="success">{{ success }}</Alert>
        <AppButton
          type="submit"
          variant="primary"
          text="Envoyer"
          aria-label="Envoyer le formulaire de contact"
        />
      </div>

      <client-only>
        <captcha />
      </client-only>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 720px;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
  }

  button {
    justify-self: center;
  }

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
  }
}
</style>
