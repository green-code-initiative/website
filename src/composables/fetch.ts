import { ref } from "vue";

export function useFetch<T>(url: string, options?: RequestInit) {
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
