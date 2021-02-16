export const api = async (
  info: RequestInfo,
  init: RequestInit = {}
): Promise<Record<string, unknown>> => {
  const parseInit = {
    ...init,
    headers: {
      ...(init?.headers || {}),
      'Content-Type': 'application/json'
    },
    body: init?.body ? JSON.stringify(init.body) : undefined
  };
  if (typeof info === 'string') {
    return fetch(`/api/${info}`, parseInit).then((res) => res.json());
  }

  if (info.url) {
    return fetch(
      {
        ...info,
        url: `/api/${info.url}`
      },
      parseInit
    ).then((res) => res.json());
  }
};
