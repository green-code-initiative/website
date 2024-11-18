<template>
  <AppSection title="On discute ?" id="contact" background-color="grey">
    <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
      <div class="form-field" role="radiogroup" aria-labelledby="i-am">
        <span class="text-label" id="i-am">Je suis :</span>
        <div class="radio-field">
          <input
            type="radio"
            id="individual"
            name="type"
            v-model="type"
            value="individu"
          />
          <label for="individual">Un individu</label>
        </div>
        <div class="radio-field">
          <input
            type="radio"
            id="organization"
            name="type"
            v-model="type"
            value="organisation"
          />
          <label for="organization">Une organisation</label>
        </div>
      </div>

      <Selectfield
        id="subject"
        name="subject"
        v-model="subject"
        label="Je souhaite :"
        :items="options"
      />

      <Textfield
        id="entity-name"
        name="name"
        label="Nom de l’entreprise / Personne"
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
        name="message"
        label="Des éléments supplémentaires ?"
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
          text="Envoyer"
          aria-label="Envoyer le formulaire de contact"
        />
      </div>

      <altcha-widget
        :challengeurl="captchaChallengeUrl"
        name="captcha"
        spamfilter
        floating
      />
    </form>
  </AppSection>
</template>

<script lang="ts" setup>
import AppButton from "@/components/shared/AppButton.vue";
import Fieldset from "@/components/shared/form/AppFieldset.vue";
import Selectfield from "@/components/shared/form/AppSelectfield.vue";
import Textfield from "@/components/shared/form/AppTextfield.vue";
import { captchaChallengeUrl, post } from "@/util/fetch";
import { extractFormData, validatePhone } from "@/util/form";
import { ref, watch } from "vue";
import AppSection from "../shared/AppSection.vue";

const error = ref("");
const success = ref("");

const submitForm = async (event: Event) => {
  const form = event.target as HTMLFormElement;
  const formData = extractFormData(form);

  if (validatePhone(formData.phone as string, error)) {
    try {
      await post("contact", formData);
      success.value = "Votre demande a bien été enregistrée";
      form.reset();
    } catch {
      error.value = "Erreur d'envoi, veuillez réessayer plus tard.";
    }
  }
};

const type = ref("individu");
const subject = ref(
  "Je souhaite contribuer à la création de règles sur Creedengo",
);
const options = ref([
  "Je souhaite contribuer à la création de règles sur Creedengo",
  "Je souhaite m’impliquer sur d’autres aspects de Creedengo",
  "Je souhaite des informations sur Creedengo",
]);

watch(type, (newValue) => {
  if (newValue === "individu") {
    options.value = [
      "Je souhaite contribuer à la création de règles sur Creedengo",
      "Je souhaite m’impliquer sur d’autres aspects de Creedengo",
      "Je souhaite des informations sur Creedengo",
    ];
    subject.value =
      "Je souhaite contribuer à la création de règles sur Creedengo";
  } else if (newValue === "organisation") {
    options.value = [
      "Je souhaite développer des règles pour mon organisation",
      "Je souhaite contribuer à Creedengo (mise à contribution de collaborateurs)",
      "Je souhaite soutenir Creedengo financièrement",
      "Je souhaite des informations sur Creedengo",
    ];
    subject.value = "Je souhaite développer des règles pour mon organisation";
  }
});
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
}

.text-label {
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 900;
  outline: none;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.radio-field {
  display: flex;
  gap: 1rem;
  margin-block-end: 0.5rem;
}

label {
  cursor: pointer;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 2px;
  background-clip: content-box;
  border: 2px solid #c1d8cfff;
  background-color: #e7e6e7;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 500;

  &:checked {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-secondary);
    background-color: var(--color-secondary);
  }
}

.form-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  form {
    width: 768px;
  }
}
</style>
