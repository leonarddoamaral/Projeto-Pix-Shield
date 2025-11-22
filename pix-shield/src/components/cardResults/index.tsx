type CardProps = {
  data: {
    id: number;
    nome: string;
    descricao: string;
  };
};

export default function CardResult({ data }: CardProps) {
  return (
    <div className="result-card">
      <h3>{data.nome}</h3>
      <p>{data.descricao}</p>
    </div>
  );
}
