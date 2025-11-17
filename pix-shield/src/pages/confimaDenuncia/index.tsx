import Header from '../header'
import './corfirma.css'

function ConfirmaDenuncia() {
    return (
        <>
        <Header/>
            <main className='main-confrima'>
                <div className='frame-central'>
                    <div className="topo">
                    <i className="bi bi-check-circle-fill"></i>
                    <h1 className='titulo-confirma'>Denúncia Registrada com Sucesso!</h1>
                    <p>Sua denúncia foi recebida e será analisada pela nossa equipe.</p>
                </div>

                <div className="card-protocolo">
                    <h3 className='titulo-protocolo'>Número do Protocolo</h3>
                    <h1 className='num-protocolo'>NUMERO ID</h1>
                    <p>Anote esse numero para acompanhar sua denuncia</p>
                    <button>Copiar Protocolo</button>
                </div>
                </div>
                
            </main>

        </>
    )
}
export default ConfirmaDenuncia