import { http } from "./clientChave";
import type { contagemChave, contagemDenunciada } from "../types";




export const ChaveAPI = {
     
     contagem: ()=>
        http<contagemChave>('/chave/contador/chaves'),
     
     denunciada: ()=>
        http<contagemDenunciada>('/chave/contador/denuncia'),
     }