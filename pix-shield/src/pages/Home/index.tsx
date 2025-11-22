import Header from '../header'
import Card from '../Card'
import './home.css'
import CardGrande from '../Card-grande'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DenunciaAPI } from './../../api/denuncia'
import { ChaveAPI } from '../../api/chave'

function Home() {
  const [count, setContadorDenuncias] = useState<number>(0)
  const [erro, setErro] = useState('')
  const [contaChaves, setContaChaves] = useState<number>(0)
  const [resultadoDenunciada, setContadorDenunciada]= useState('')

  interface contadorDenunciada{
    valor_chave: string;
  }
  useEffect(() => {
    const buscaDenuncia = async () => {
      try {
        const resultadoDenuncia = await DenunciaAPI.contagem()
        let count = 0
        if (Array.isArray(resultadoDenuncia) && resultadoDenuncia.length > 0) {
          count = Number((resultadoDenuncia[0] as any)['COUNT(*)'] ?? 0)
        } else if (resultadoDenuncia && typeof resultadoDenuncia === 'object') {
          count = Number((resultadoDenuncia as any)['COUNT(*)'] ?? (resultadoDenuncia as any).count ?? 0)
        } else {
          count = Number(resultadoDenuncia ?? 0)
        }
        setContadorDenuncias(Number.isNaN(count) ? 0 : count)
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao carregar a contagem.";
        setErro(`Erro ao carregar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`);
      }

    };
    const buscaChave = async () => {
      try {
        const resultadoChave = await ChaveAPI.contagem()
        let contaChaves = 0
        if (Array.isArray(resultadoChave) && resultadoChave.length > 0) {
          contaChaves = Number((resultadoChave[0] as any)['COUNT(*)'] ?? 0)
        } else if (resultadoChave && typeof resultadoChave === 'object') {
          contaChaves = Number((resultadoChave as any)['COUNT(*)'] ?? (resultadoChave as any).contaChaves ?? 0)
        } else {
          contaChaves = Number(resultadoChave ?? 0)
        }

        setContaChaves(Number.isNaN(contaChaves) ? 0 : contaChaves)
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao carregar a contagem.";
        setErro(`Erro ao carregar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`);
      }
    }
    const buscaMaisDenunciada= async () => {
      try {
        const resultadoDenunciada = await ChaveAPI.denunciada()
        let valorDaChave: string = 'Nenhuma'; // Valor padrão

        if (Array.isArray(resultadoDenunciada) && resultadoDenunciada.length > 0) {
          const chave = resultadoDenunciada[0] as contadorDenunciada;
          valorDaChave = chave.valor_chave;
        } else if (resultadoDenunciada && typeof resultadoDenunciada === 'object' && 'valor_chave' in resultadoDenunciada) {
          const chave = resultadoDenunciada as contadorDenunciada;
          valorDaChave = chave.valor_chave;
        } else {
          valorDaChave = 'Nenhuma';
        }
        setContadorDenunciada(valorDaChave);
        
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao carregar a contagem.";
        setErro(`Erro ao carregar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`);
      }
    }
    buscaMaisDenunciada();
    buscaChave();
    buscaDenuncia();
  }, [])
  let exibeDenuncia = count !== null ? String(count) : '...'
  let exibeChave = contaChaves !== null ? String(contaChaves) : '...'


  return (
    <>
      <Header />
      <nav className='homeContainer'>
        <h1 className='titulo-home'>Bem-vindo ao Pix Shield!</h1>
        <p className='p-denuncia'>Denuncie e encontre chaves pix sobe suspeitas de fraude</p>
        <Link to='/registro'> <button>+ Nova denúncia</button></Link>
      </nav>
      <nav className='cards-info'>
        <Card titulo={exibeDenuncia} subtitulo='Denúncias Registradas' />
        <Card titulo={exibeChave} subtitulo='Chaves Registradas' />
        <Card titulo={resultadoDenunciada} subtitulo='Chave com mais denúncias' />
      </nav>
      <main className='cards-main'>
        <CardGrande titulo='Fazer Denúncia' subtitulo='Registre rapidamente chaves Pix suspeitas para garantir a segurança.' icone='bi bi-plus-square-fill' />
        <CardGrande titulo='Pesquisar' subtitulo='Consulte chaves Pix registradas em nosso banco de dados de fraudes.' icone='bi bi-search' />
        <CardGrande titulo='Minhas Denúncias' subtitulo='Verifique denúncias feitas por você. Denúncias feitas por você ficam no seu perfil.' icone='bi bi-clipboard-check' />
      </main>
    </>
  )
}
export default Home