import './App.css'

function Header() {
    return (
        <header className="tsx-header">
            <h1>Perfil</h1>
            <p></p>
            <nav className="header-nav">
                <button className="nav-btn active">Dados Pessoais</button>
                <button className="nav-btn">Minhas Denúncias</button>
            </nav>
        </header>
    )
}

function PerfilUser() {

    return (
        <>
            <Header />
            <div className='containerPerfil'>
                <aside className="infoGerais" aria-label="Informações do perfil">
                    <section className="perfil">
                        <figure className="avatarPerfil">
                          <img
                                src="../../../src/assets/perfil.webp"
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
                        <p>Denuncias Enviadas:</p>
                        <p>0</p>
                    </section>
                </aside>

                <main className="infoPessoal">
                    <h2>Informações Pessoais</h2>
                    <div className="areaNome">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Digite seu nome completo" />
                    </div>
                    <div className="areaEmail">
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="areaTelefone">
                        <label>Telefone</label>
                        <input type="tel" placeholder="Digite seu telefone" />                        
                    </div>
                    <div className="areaSenha">
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                    <div className="botoes">
                        <button className="btnSalvar">Salvar</button>
                        <button className="btnAlterar">Alterar</button>
                    </div>
                </main>
            </div>
            

        </>
    )

}

export default PerfilUser