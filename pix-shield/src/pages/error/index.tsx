import { Link } from 'react-router-dom'
import LogoBroken from './../../assets/erro-icon.png'
import './erro.css'
function Erro() {
    return (
        <>
            <div className="container-erro">
                <img src={LogoBroken}/>
                <h1 className='h1-erro'>Página não encontrada</h1>
                <p className='p-erro'>Endereço não encontrado, essa página não existe ou foi digitado incorretamente.</p>
                <Link className="linkErro" to ="/"><button type='button' className='button-voltar'> Voltar a tela inicial</button></Link>
            </div>
        </>
    )

} export default Erro