
import './styles.css'
import logo from '../../assets/logo-PixShield.svg'
import { useState, type FormEvent } from 'react'
import { UserAPI } from '../../api/users'
import type { User } from '../../types' 
import Alerta from '../alert/alert'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);

     let navegate = useNavigate()

    const toggleSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    }
    const inputType = senhaVisivel ? "text" : "password";
    const iconClass = senhaVisivel ? "bi bi-eye-slash" : "bi bi-eye";

    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();
        setErro(null);
        setSucesso(false)

        const payload: Omit<User,"id_usuario" |  "nome_usuario" | "telefone_usuario"> = {
            email_usuario: email,
            senha_usuario: senha,
        }

        try{
            const logar = await UserAPI.login(payload);
            if(logar.token){
            localStorage.setItem('authToken', logar.token);
            
            }
            console.log('Usuario Logado com sucesso', logar)
            setSucesso(true);
            navegate('/')
            setEmail('');
            setSenha('');
        }catch (error){
            console.error('Erro fazer login do usuário: ', error)
            const errorMensage = error instanceof Error ? error.message : "Erro ao fazer Login.";
            setErro(`Erro ao fazer login: ${errorMensage.includes('HTTP 500') ? 'Erro interno.' : errorMensage}`)
        }
    }

    return (
        <>

            <main className="loginContainer">
                <div className='alerta'>
                    {sucesso && <Alerta severity='success' messageAlert='Login Realizado com sucesso.' /> }
                    {erro && <Alerta severity='error' messageAlert="Usuario não encontrado. Verifique os campos de email e senha" />}
                </div>

                <section className="cardLogin">
                <div className="infoCard">
                        <img src={logo} alt='Login icone' className='icone'></img>
                        <h2>Entrar</h2>
                        <p>Acesse sua conta para continuar</p>
                    </div>


                    <form className="formLogin" onSubmit={handleSubmit}>
                        <div className="inputLogin">
                            <label className='labelInputs'>Email</label>
                            <input type="email" required placeholder="seu@email.com-mail" className='inputs' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className='labelInputs'>Senha</label>
                            <div className="passwordInput">
                            <input type={inputType} required placeholder="Insira sua senha" className='inputs' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            <i className={iconClass} onClick={toggleSenha}></i>
                            </div>
                        </div>

                        <div className="submitLogin">
                            <button type="submit" className="btnEntrar">Entrar</button>
                        </div>

                        <div className="ajudaLogin">
                            <Link to="/Cadastro">Criar conta</ Link>
                            
                        </div>
                    </form>
                </section>
                
            </main>
        </>
    )

}

export default Login