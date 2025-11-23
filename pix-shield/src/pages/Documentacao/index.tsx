import Footer from "../../components/Footer";
import Header from "../../components/Header"
import './documentacao.css'

function Documentacao() {
    return (
        <>
            <Header />

            <section className="docContainer">

                <div className='titulo-doc'>
                    <h1>Documentação e Ajuda</h1>
                </div>

                <main className='main-doc'>
                    <h2>Sobre o PixShield</h2>
                    <p>Pix Shield é a plataforma online e gratuita que redefine a segurança das transações, funcionando como a principal Central de Reclamação e Consulta de chaves Pix com suspeitas de fraude.
                    Nascida como um projeto de inovação em ambiente universitário, a Pix Shield aplica inteligência e dados para capacitar o usuário</p>

                    <h2>Como Usar a Plataforma</h2>
                    <p>Utilize a área de Pesquisa para verificar qualquer chave Pix antes de realizar uma transação.

                        Ação: Digite a chave (e-mail, CPF/CNPJ, telefone ou chave aleatória) no campo de busca.
                        Resultado: O sistema informará se a chave possui denúncias registradas em nosso banco de dados.</p>

                    <h2>Fazer uma Denúncia</h2>
                    <p>Sua contribuição é vital para a segurança da comunidade.

                        Acesse a área Fazer Denúncia.
                        Preencha todos os campos obrigatórios, incluindo a chave Pix e uma descrição detalhada do ocorrido.Forneça o máximo de informações e provas</p>
                        
                    <h2>Precisa de Ajuda?</h2>
                    <p>Se tiver dúvidas sobre o uso da plataforma ou encontrou um erro, entre em contato com nosso suporte técnico. Sua segurança é nossa prioridade.</p>
                </main>

            </section>

            <Footer />
        </>
    )

}
export default Documentacao;