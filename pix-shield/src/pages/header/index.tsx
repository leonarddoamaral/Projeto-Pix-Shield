import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../../Docs/Assets/logo-PixShield.svg'
function Header() {

  return (
    <>
      <header>

        <section className="headerContainer">
          <div className="logoHeader">
            <Link to="/"><img src={logo} alt='Login icone' className='icone'></img></Link> 
          </div>

          <nav className="navbar">
            <ul className="menu">
              <li><Link to="/">Início</Link></li>
              <li><Link to="">Pesquisar</Link></li>
              <li><Link to="">Acompanhar</Link></li>
              <li><Link to="/documentacao">Documentação e ajuda</Link></li>
              <li><Link to="">Perfil</Link></li>
              <li><Link to="">Admin</Link></li>
            </ul>
          </nav>
        </section>

      </header>
    </>
  )
}

export default Header
