import Header from '../header'
import './styles.css'

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
                        </div>

                        <div className="acoesPerfil">
                            <button type="button" className="mudarFoto">
                                Alterar Foto
                            </button>
                        </div>
                    </section>

                    <section className="contadorDenuncias">
                        <p>Denuncias Enviadas</p>
                        <p> (puxar do backend) </p>
                    </section>
                </aside>

                <main className="infoPessoal">
                    <h2>Informações Pessoais</h2>
                    <div className="areaNome">
                        <h3>Nome Completo</h3>
                        <p>(puxar do backend)</p>
                    </div>
                    <div className="areaEmail">
                        <h3>E-mail</h3>
                        <p>(puxar do backend)</p>
                    </div>
                    <div>
                        <h3>Telefone</h3>
                        <p>(puxar do backend)</p>                        
                    </div>
                    <div>
                        <h3>Senha</h3>
                        <p>(puxar do backend)</p>
                    </div>    
                </main>
            </div>

        </>
    )

}

export default PerfilUser