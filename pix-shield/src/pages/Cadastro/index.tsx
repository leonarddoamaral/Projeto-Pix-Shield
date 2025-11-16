import './styles.css'
import logo from '../../../../Docs/Assets/logo-PixShield.svg'
import { useState } from 'react'


function Cadastro() {
    const [senha, setSenha] = useState(false);
    const toggleSenha = () => {
        setSenha(!senha);
    }
    const inputType = senha ? "text" : "password";
    const iconClass = senha ? "bi bi-eye-slash" : "bi bi-eye";

    return (
        <>
            <main className="cadastroContainer">

                <section className="cardCadastro">
                    <div className="infoCard">
                        <img src={logo} alt='Logo icone' className='icone'></img>
                        <h2>Criar Conta</h2>
                        <p>Preencha os dados para se cadastrar</p>
                    </div>

                    <form className="formCadastro" >
                        <div className="inputCadastro" >
                            <label className='labelInputs'>Nome Completo</label>
                            <input type="text" required placeholder="Nome Completo" className='inputs' />
                            <label className='labelInputs'>Email</label>
                            <input type="email" required placeholder="seu@email.com" className='inputs' />
                            <label className='labelInputs'>Telefone</label>
                            <input type="tel" required placeholder="(**)*****-****" className='inputs'/>
                            <label className='labelInputs'>Senha</label>
                            <div className="passwordInput">
                            <input type={inputType} required placeholder="Insira sua senha" className='inputs'/>
                            <i className={iconClass} onClick={toggleSenha}></i>
                            </div>
                        </div>

                        <div className="confirmarCadastro">
                            <div className="aceiteTermos">
                                <input type="checkbox" id="aceite" name="termos" value="aceito" required/>
                            </div>
                            <label className="labelAceite" htmlFor="aceite">Concordo com os termos e a política de privacidade</label>
                            <div className="submitCadastro">
                                <button type="submit" className="btnEntrar">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>

    )
}

export default Cadastro