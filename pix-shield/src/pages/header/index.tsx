import './Header.css'
import logo from '../../../../Docs/Assets/logo-PixShield.svg'
function Header() {

  return (
    <>
      <header>

        <section className="headerContainer">
          <div className="logoHeader">
          <img src={logo} alt='Login icone' className='icone'></img>
          </div>

          <nav className="navbar">
            <ul className="menu">
              <li>Início</li>
              <li>Páginas</li>
              <li>Destaques </li>
              <li>Assinar </li>
              <li>Admin </li>
            </ul>
          </nav>
        </section>

      </header>
    </>
  )
}

export default Header
