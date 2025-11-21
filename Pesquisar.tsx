import "./Pesquisar.css";

interface Denuncia {
  titulo: string;
  chavePix: string;
  descricao: string;
  data: string;
}

export default function Pesquisar() {

  const denuncias: Denuncia[] = [
    {
      titulo: ".....",
      chavePix: "....",
      descricao: ".....",
      data: "...."
    },
    {
      titulo: ".....",
      chavePix: "....",
      descricao: ".....",
      data: "...."
    },
    {
      titulo: "....",
      chavePix: ".....",
      descricao: ".....",
      data: "....."
    }
  ];

  return (
    <>
    <header/>
   
    <div className="pesquisar-container">
      <h1>Pesquisar Denúncia</h1>

      <div className="buscar-box">
        <input type="text" placeholder="Buscar por chave Pix" />
        <button>Pesquisar</button>
      </div>

      <div className="resultados">
        {denuncias.map((item, index) => (
          <div className="card" key={index}>
            <p className="titulo"><strong>Título:</strong> {item.titulo}</p>
            <p className="chavePix"><strong>ChavePix:</strong> {item.chavePix}</p>
            <p className="descricao"><strong>Descrição:</strong> {item.descricao}</p>
            <p className="data"><strong>Data:</strong> {item.data}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
