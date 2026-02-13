<template>
  <AppSection :title="title" :id="sectionId">
    <form @submit.prevent="submitForm" aria-label="Formulaire de contact">
      <div class="form-field" role="radiogroup" aria-labelledby="i-am">
        <span class="text-label" id="i-am">Je suis :</span>
        <label for="individual" class="radio-field">
          <input
            type="radio"
            id="individual"
            name="type"
            v-model="type"
            value="individu"
          />
          Un individu
        </label>
        <label for="organization" class="radio-field">
          <input
            type="radio"
            id="organization"
            name="type"
            v-model="type"
            value="organisation"
          />
          Une organisation
        </label>
      </div>

      <Selectfield
        id="subject"
        name="subject"
        v-model="subject"
        label="Je souhaite :"
        :items="currentOptions"
      />

      <Textfield
        id="entity-name"
        name="name"
        label="Nom de l'entreprise / Personne"
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
        label="Message"
      />

      <div class="form-submit">
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
  </AppSection>
</template>

<script lang="ts" setup>
import Alert from "@/components/shared/AppAlert.vue";
import AppButton from "@/components/shared/AppButton.vue";
// TODO Maybe we can import it only if form has been touched?
import Captcha from "@/components/shared/form/AppCaptcha.vue";
import Fieldset from "@/components/shared/form/AppFieldset.vue";
import Selectfield from "@/components/shared/form/AppSelectfield.vue";
import Textfield from "@/components/shared/form/AppTextfield.vue";
import { post } from "@/util/fetch";
import { extractFormData, validatePhone } from "@/util/form";
import { ref, watch, computed } from "vue";
import AppSection from "../AppSection.vue";

interface ContactFormProps {
  title?: string;
  sectionId?: string;
  individualOptions?: string[];
  organizationOptions?: string[];
}

const props = withDefaults(defineProps<ContactFormProps>(), {
  title: "On discute ?",
  sectionId: "contact",
  individualOptions: () => [
    "Je souhaite contribuer aux projets du collectif",
    "Je souhaite des informations sur le collectif et ses projets",
  ],
  organizationOptions: () => [
    "Je souhaite développer des règles pour mon organisation",
    "Je souhaite contribuer aux projets du collectif (mise à contribution de collaborateurs)",
    "Je souhaite soutenir le collectif financièrement",
    "Je souhaite des informations sur le collectif et ses projets",
  ],
});

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
const subject = ref(props.individualOptions[0] || "");

const currentOptions = computed(() => {
  return type.value === "individu" 
    ? props.individualOptions 
    : props.organizationOptions;
});

watch(type, (newValue) => {
  if (newValue === "individu") {
    subject.value = props.individualOptions[0] || "";
  } else if (newValue === "organisation") {
    subject.value = props.organizationOptions[0] || "";
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
