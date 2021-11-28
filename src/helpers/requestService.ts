const BASE_URL = process.env.REACT_APP_API_URL;

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
