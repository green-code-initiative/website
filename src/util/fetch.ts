const baseApiUrl = import.meta.env.VITE_API_URL ?? "/api";

export const captchaChallengeUrl = `${baseApiUrl}/captcha_challenge`;

export const post = async (resource: string, body: any) => {
  return fetch(`${baseApiUrl}/${resource}`, {
    method: "POST",
    body: new URLSearchParams(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
};
