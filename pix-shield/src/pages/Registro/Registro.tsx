import React, { useState } from "react";
import Header from "../header";
import "./Registro.css";
import Alerta from '../alert/alert'
import type { Denuncia } from "../../types";
import { DenunciaAPI } from "../../api/denuncia";
import { useNavigate } from "react-router-dom";

export default function Registro() {

  const [idCliente, setIdCliente] = useState<string | null>(null);
  const [tituloDenuncia, setTituloDenuncia] = useState("");
  const [descricaoDenuncia, setDescricaoDenuncia] = useState("");
  const [chavePix, setChavePix] = useState("")
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  let navegate = useNavigate()

  const enviarDenuncia = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setSucesso(false);

    const payload: Omit<Denuncia, "id" | "data_denuncia" | "nome_usuario" | "id_chave_fk"> = {
      conteudo_denuncia: tituloDenuncia,
      descricao_denuncia: descricaoDenuncia,
      id_usuario_fk: Number(idCliente),
      valor_chave: chavePix,
    }

    try {
      const novaDenuncia = await DenunciaAPI.create(payload);
      console.log('Denuncia cadastrada com sucesso: ', novaDenuncia)
      setSucesso(true);
      navegate('/sucesso', {
        state: {
          idDenuncia: novaDenuncia.id,
        }
      });
      setIdCliente(null);
      setChavePix('');
      setTituloDenuncia('');
      setDescricaoDenuncia('')
    } catch (error) {
      console.error('Erro ao cadastrar denuncia:', error);
      const errorMessage = error instanceof Error ? error.message : "Erro ao cadastrar. Verfique os campos de resposta";
      setErro(`Erro ao cadastrar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`);
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
                value={idCliente === null ? '' : idCliente}
                onChange={(e) => setIdCliente(e.target.value)}
                placeholder="Digite o ID do cliente"
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
            <button type="button" className="outline" onClick={enviarDenuncia}>
              Criar
            </button>

          </div>
        </form>
      </div>
    </>
  );
}
