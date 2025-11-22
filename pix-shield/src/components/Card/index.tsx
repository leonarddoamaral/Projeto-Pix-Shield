import './Card.css'

function Card(prop: { titulo: string; subtitulo: string;}) {

    return (
        <>
                <div className="card-home">
                    <h2>{prop.titulo}</h2>
                    <p>{prop.subtitulo}</p>
                </div>
        </>
    )
}

export default Card