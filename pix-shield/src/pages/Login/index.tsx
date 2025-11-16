
import './styles.css'

function Login() {

    return (
        <>

            <main className="loginContainer">

                <section className="cardLogin">
                <div className="infoCard">
                        <h2>Entrar</h2>
                        <p>Acesse sua conta para continuar</p>
                    </div>


                    <form className="formLogin">
                        <div className="inputLogin">
                            <input type="email" required placeholder="E-mail" />
                            <input type="password" required placeholder="Senha" />
                        </div>

                        <div className="submitLogin">
                            <button type="submit" className="btnEntrar">Entrar</button>
                        </div>

                        <div className="ajudaLogin">
                            <a href="#">Criar conta</a>
                            <a href="#">Esqueci a senha</a>
                            
                        </div>
                    </form>
                </section>
            </main>
        </>
    )

}

export default Login