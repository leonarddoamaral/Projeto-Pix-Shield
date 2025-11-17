
import './styles.css'
import logo from '../../assets/logo-PixShield.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';



function Login() {
    const [senha, setSenha] = useState(false);
    const toggleSenha = () => {
        setSenha(!senha);
    }

    const inputType = senha ? "text" : "password";
    const iconClass = senha ? "bi bi-eye-slash" : "bi bi-eye";

    return (
        <>

            <main className="loginContainer">

                <section className="cardLogin">
                <div className="infoCard">
                        <img src={logo} alt='Login icone' className='icone'></img>
                        <h2>Entrar</h2>
                        <p>Acesse sua conta para continuar</p>
                    </div>


                    <form className="formLogin">
                        <div className="inputLogin">
                            <label className='labelInputs'>Email</label>
                            <input type="email" required placeholder="seu@email.com-mail" />
                            <label className='labelInputs'>Senha</label>
                            <div className="passwordInput">
                            <input type={inputType} required placeholder="Insira sua senha" />
                            <i className={iconClass} onClick={toggleSenha}></i>
                            </div>
                        </div>

                        <div className="submitLogin">
                            <button type="submit" className="btnEntrar">Entrar</button>
                        </div>

                        <div className="ajudaLogin">
                            <Link to="/Cadastro">Criar conta</Link>                     
                        </div>
                    </form>
                </section>
            </main>
        </>
    )

}

export default Login