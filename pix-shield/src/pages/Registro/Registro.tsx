import React, { useState } from "react";
import Header from "../header";
import "./Registro.css";
import Alerta from '../alert/alert'
import type { Denuncia } from "../../types";
import { DenunciaAPI } from "../../api/denuncia";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';
import { useEffect } from "react";


interface CustomJwtPayload extends JwtPayload {
    id_usuario: number; 
    email_usuario: string;
}

function getUserIdFromToken(): number | null {
    const token = localStorage.getItem('authToken');
    if (!token) {
        return null; 
    }
    try {
        const decoded = jwtDecode<CustomJwtPayload>(token);
        return decoded.id_usuario; 
    } catch (e) {
        console.error("Erro ao decodificar o token:", e);
        localStorage.removeItem('authToken'); 
        return null;
    }
}


export default function Registro() {

  const [idUsuario, setIdUsuario] = useState<number | null>(null);
  const [tituloDenuncia, setTituloDenuncia] = useState("");
  const [descricaoDenuncia, setDescricaoDenuncia] = useState("");
  const [chavePix, setChavePix] = useState("")
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(true);

  let navegate = useNavigate()

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (userId !== null) {
      setIdUsuario(userId);
      setLoading(false);
    } else {
      setErro("Você precisa estar logado para criar uma denúncia.");
      setLoading(false);
    }
  }, []);
  const enviarDenuncia = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setSucesso(false);
    setLoading(true);

    if (idUsuario === null) {
        setErro("ID do usuário não encontrado. Faça login novamente.");
        setLoading(false);
        return;
    }
   
    const payload: Omit<Denuncia, "id_denuncia" | "nome_usuario" | "data_denuncia" | "id_chave_fk"> = {
      conteudo_denuncia: tituloDenuncia,
      descricao_denuncia: descricaoDenuncia,
      id_usuario_fk: Number(idUsuario),
      valor_chave: chavePix,
    }
    

    try {
      const novaDenuncia = await DenunciaAPI.create(payload);
      if (novaDenuncia && novaDenuncia.id_denuncia) { 
        console.log('Denuncia cadastrada com sucesso: ', novaDenuncia)
        setSucesso(true);
        navegate('/sucesso', {
          state: {
            idDenuncia: novaDenuncia.id_denuncia,
          }
        });
      } else {

        throw new Error("A API não retornou o ID da denúncia."); 
      }
      setIdUsuario(idUsuario);
      setChavePix('');
      setTituloDenuncia('');
      setDescricaoDenuncia('')
    } catch (error) {
      console.error('Erro ao cadastrar denuncia:', error);
      const errorMessage = error instanceof Error ? error.message : "Erro ao cadastrar. Verfique os campos de resposta";
      setErro(`Erro ao cadastrar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`);
    }finally {
      setLoading(false); 
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1>Nova Denúncia</h1>
        {sucesso && <Alerta severity='success' messageAlert='Denúncia criada com sucesso!' />}

        {erro && <Alerta severity='error' messageAlert={erro} />}
        <form onSubmit={enviarDenuncia}>

          <div className="form-box">

            <div className="input-group">
              <label>ID Cliente</label>
              <input
                type="number"
                value={idUsuario === null ? '' : idUsuario}
                disabled
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Chave Pix</label>
            <input
              type="text"
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
              placeholder="Digite a chave pix"
              required
            />
          </div>

          <div className="form-group">
            <label>Título da Denúncia</label>
            <input
              type="text"
              value={tituloDenuncia}
              onChange={(e) => setTituloDenuncia(e.target.value)}
              placeholder="Digite o título da denúncia"
              required
            />
          </div>


          <div className="form-group">
            <label>Descrição da Denúncia</label>
            <textarea
              value={descricaoDenuncia}
              onChange={(e) => setDescricaoDenuncia(e.target.value)}
              placeholder="Descreva a denúncia"
              rows={6}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="outline" onClick={enviarDenuncia}>
              Criar
            </button>

          </div>
        </form>
      </div>
    </>
  );
}
