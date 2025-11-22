import './CardGrande.css'

function CardGrande(prop: { titulo: string; subtitulo: string; icone:string}) {
    
    return (
        <>
                <div className="card-main">
                    <i className={prop.icone}></i>
                    <h2>{prop.titulo}</h2>
                    <p>{prop.subtitulo}</p>
                </div>
        </>
    )
}

export default CardGrande