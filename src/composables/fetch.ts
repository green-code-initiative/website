import { ref } from "vue";

export function useFetchJson<T>(url: string, options?: RequestInit) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(true);

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false));

  return { data, error, loading };
}

export function useFetchText(url: string, options?: RequestInit) {
  const data = ref<string | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(true);

  fetch(url, options)
    .then((res) => res.text())
    .then((text) => (data.value = text))
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false));

  return { data, error, loading };
}
