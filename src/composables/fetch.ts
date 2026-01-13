import { ref, toValue, watchEffect, type Ref } from "vue";

const useFetch = <T>(
  url: string | Ref<string>,
  parser: (res: Response) => Promise<T>,
  options?: RequestInit
) => {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(true);

  const fetchData = () => {
    data.value = null;
    error.value = null;
    loading.value = true;

    fetch(toValue(url), options)
      .then((res) => parser(res))
      .then((result) => (data.value = result))
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false));
  };

  watchEffect(() => fetchData());

  return { data, error, loading };
};

export const useFetchJson = <T>(
  url: string | Ref<string>,
  options?: RequestInit
) => useFetch<T>(url, (res) => res.json(), options);

export const useFetchText = (
  url: string | Ref<string>,
  options?: RequestInit
) => useFetch<string>(url, (res) => res.text(), options);
