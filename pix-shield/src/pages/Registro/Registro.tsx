import React, { useState } from "react";
import Header from "../header";
import "./Registro.css";
import Alerta from '../alert/alert'

export default function Registro() {

  const [nomeCliente, setNomeCliente] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [tituloDenuncia, setTituloDenuncia] = useState("");
  const [descricaoDenuncia, setDescricaoDenuncia] = useState("");
  const [chavePix, setChavePix]= useState("")


  const criarDenuncia = () => {
    <Alerta severity='success' messageAlert='Denúncia criada com sucesso.' />
  };

  const enviarDenuncia = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Denúncia enviada!");
    setNomeCliente("");
    setIdCliente("");
    setTituloDenuncia("");
    setDescricaoDenuncia("");
  };

  return (
    <>
    <Header/>
    <div className="container">
      <h1>Nova Denúncia</h1>

      <form onSubmit={enviarDenuncia}>
   
        <div className="form-box">
          <div className="input-group">
            <label>NomeCliente</label>
            <input
              type="text"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
              placeholder="Digite o nome do cliente"
              required
              />
          </div>

          <div className="input-group">
            <label>ID Cliente</label>
            <input
              type="text"
              value={idCliente}
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
          <button type="button" className="outline" onClick={criarDenuncia}>
            Criar
          </button>
        
        </div>
      </form>
    </div>
    </>
  );
}
