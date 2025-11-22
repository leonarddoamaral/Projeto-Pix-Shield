import Header from '../header'
import './styles.css'
import MinhasDenuncias from './../../components/MinhasDenuncias'

function PerfilUser() {

    return (
        <>
            <Header />
             <div className='containerPerfil'>
                <aside className="infoGerais" aria-label="Informações do perfil">
                    <section className="perfil">
                        <figure className="avatarPerfil">
                          <img
                                src="./../src/assets/perfil.svg"
                                alt="Foto de perfil "
                                className="avatar-image"
                            />
                        </figure>

                        <div className="infoPerfil">
                            <h2 className="profile-name">Nome do usuário</h2>
                            <p className="profile-email">nome@email.com</p>
                            <p className="profile-email">ID do usuário</p>
                        </div>

                    </section>

                    <section className="contadorDenuncias">
                        <p>Denuncias Enviadas: 10</p>
                    </section>
                </aside>

                <main className="infoPessoal">
                    <h2>Informações Pessoais</h2>
                    <div className="areaNome">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Digite seu nome completo" disabled/>
                    </div>
                    <div className="areaEmail">
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" disabled/>
                    </div>
                    <div className="areaTelefone">
                        <label>Telefone</label>
                        <input type="tel" placeholder="Digite seu telefone" disabled/>                        
                    </div>
                    <div className="areaSenha">
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha"  disabled />
                    </div>
                    <div className="botoes">
                        <button className="btnSalvar">Salvar</button>
                        <button className="btnAlterar">Alterar</button>
                    </div>
                    <div className='card'>
                        <MinhasDenuncias titulo="titulo" id={1} desc='descrito' chave="abadas" data="11/11/21" />
                    </div>
                </main>
            </div>

        </>
    )

}

export default PerfilUser