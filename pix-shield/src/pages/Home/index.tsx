import Header from '../header'
import Card from '../Card'
import './home.css'
import CardGrande from '../Card-grande'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <nav className='homeContainer'>
        <h1 className='titulo-home'>Bem-vindo ao Pix Shield!</h1>
        <p className='p-denuncia'>Denuncie e encontre chaves pix sobe suspeitas de fraude</p>
       <Link to='/registro'> <button>+ Nova denúncia</button></Link>
      </nav>
      <nav className='cards-info'>
        <Card titulo='1,247' subtitulo='Denúncias Registradas'/>
        <Card titulo='20' subtitulo='Chaves Registradas'/>
        <Card titulo='ABSDADADA' subtitulo='Chave com mais denúncias'/>
      </nav>
      <main className='cards-main'>
        <CardGrande titulo='Fazer Denúncia' subtitulo='Registre rapidamente chaves Pix suspeitas para garantir a segurança.' icone='bi bi-plus-square-fill' />
        <CardGrande titulo='Pesquisar' subtitulo='Consulte chaves Pix registradas em nosso banco de dados de fraudes.' icone='bi bi-search' />
        <CardGrande titulo='Acompanhar' subtitulo='Verifique o status da sua denúncia.Denúncias com conteúdo inapropriado ou ofensivo serão rejeitadas.' icone='bi bi-clipboard-check'/>
      </main>
    </>
  )
}
export default Home