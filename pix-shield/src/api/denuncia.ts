import { http } from "./clientDenuncias";
import type { Denuncia, contagemDenuncia } from "../types";


type DenunciaId = number;

export const DenunciaAPI = {
     list: () =>
       http<Denuncia[]>("/denuncias"),
   
     get: (id: DenunciaId) =>
       http<Denuncia>(`/denuncias/${id}`),
     
     contagem: ()=>
        http<contagemDenuncia>('/denuncias/contador'),
   
     create: (
       payload: Omit<
         Denuncia,
         "id" | "data_denuncia" | "nome_usuario" | "id_chave_fk"
       >
     ) =>
       http<Denuncia>("/denuncias", { 
         method: "POST",
         body: JSON.stringify(payload),
       }),
        
}