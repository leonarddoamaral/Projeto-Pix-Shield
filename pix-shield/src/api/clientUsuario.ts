const API = "http://localhost:3000";

export async function http<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  
  const token = localStorage.getItem('authToken');

  const headers = new Headers(options?.headers); 

  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`); 
  }
  const res = await fetch(`${API}${path}`, {
    headers: headers, 
    ...options,
  });
  
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem('authToken'); 
      msg += ' - Sessão expirada ou acesso negado.';
    }

    try {
      const data = await res.json();
      if (data?.erro) msg += ` - ${data.erro}`;
    } catch { /* ignore */ }
    throw new Error(msg);
  }
  
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}