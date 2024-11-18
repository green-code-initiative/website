import type { Ref } from "vue";

export const extractFormData = (
  form: HTMLFormElement,
): Record<string, FormDataEntryValue> =>
  Object.fromEntries(
    Array.from(new FormData(form)).filter(([, value]) => value !== ""),
  );

export const validatePhone = (
  value: string,
  errorRef: Ref<string, string>,
): boolean => {
  /**
   * Regular expression to validate a phone number:
   * - It can optionally start with a plus sign (+).
   * - It can then contain one or more digits (0-9), commas, periods, or whitespace.
   * - The string must end after the allowed characters.
   */
  const phonePattern = /^\+?[\d,. ]+$/;
  if (!value) {
    errorRef.value = "";
    return true;
  } else if (!phonePattern.test(value)) {
    errorRef.value =
      "Le téléphone doit contenir uniquement des chiffres, +, ,, . ou un espace.";
    return false;
  } else {
    errorRef.value = "";
    return true;
  }
};
