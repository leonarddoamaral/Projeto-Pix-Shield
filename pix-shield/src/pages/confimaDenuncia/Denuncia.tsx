import Header from "../header";
import "./Denuncia.css";
import { useLocation } from "react-router-dom";


export default function Sucesso() {

  const location = useLocation();
  const stateID = (location.state as { idDenuncia?: number })?.idDenuncia;
  const protocolo: string = stateID ? String(stateID) : "ERRO-NAV-FALHA";
  function copiarProtocolo() {
    navigator.clipboard.writeText(protocolo);
  }

  return (
    <>
      <Header />
      <div className="success-container">


        <div className="check-icon">✓</div>

        <h1>Denúncia Registrada com Sucesso!</h1>

        <p className="descricao">
          Sua denúncia foi recebida e será analisada pela equipe.
        </p>


        <div className="box-protocolo">
          <h3>Número do Protocolo</h3>

          <h2 className="protocolo">{protocolo}</h2>

          <p className="importante">
            <strong>Importante:</strong> Guarde este número para acompanhar sua denúncia.
          </p>

          <button className="copiar-btn" onClick={copiarProtocolo}>
            Copiar Protocolo
          </button>
        </div>
      </div>
    </>
  );
}
