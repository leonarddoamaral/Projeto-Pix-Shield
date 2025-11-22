// VITE_API_URL=http://185.137.92.41:3000
import { http } from "./clientUsuario";
import type { User, LoginResponse} from "../types";


type UserId = number | string; 

export const UserAPI = {
  list: () =>
    http<User[]>("/usuarios"),

  get: (id: UserId) =>
    http<User>(`/usuarios/${id}`),


  create: (
    payload: Omit<
      User,
      "id_usuario" 
    >
  ) =>
    http<User>("/usuarios", { 
      method: "POST",
      body: JSON.stringify(payload),
    }),
    
    
  login: (
    payload: Omit<
    User,
    "id_usuario" |  "nome_usuario" | "telefone_usuario"
    >
  )=>  
    http<LoginResponse>("/usuarios/login",{
      method: "POST",
      body: JSON.stringify(payload),
    }),
    
  
  update: (
    id: UserId,
    payload: Omit<
      User,
      "id_usuario" 
    >
  ) =>
    http<User>(`/usuarios/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
    
  
  patch: (
    id: UserId,
    payload: Partial<Omit<User, "id_usuario">>
  ) =>
    http<User>(`/usuarios/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
    
  remove: (id: UserId) =>
    http<void>(`/usuarios/${id}`, {
      method: "DELETE",
    }),
};