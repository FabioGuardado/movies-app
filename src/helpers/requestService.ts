const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(`${BASE_URL}${path}`, config);
  const response = await fetch(request);

  const data = await response.json();

  return data;
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config };
  return http<T>(path, init);
}

export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit,
): Promise<U> {
  const init = {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'content-type': 'application/json;charset=UTF-8',
    },
    ...config,
  };
  return http<U>(path, init);
}

export async function del<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'delete', ...config };
  return http<T>(path, init);
}
