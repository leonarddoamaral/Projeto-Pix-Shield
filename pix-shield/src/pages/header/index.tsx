import './styles.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo-PixShield.svg'
import NavItem, { type NavItemInterface } from '../../components/Nav-item'
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
function Header() {

  const items: NavItemInterface[] = [
    {
      url: "/login",
      label: "Entrar"
    },
    {
      url: "/",
      label: "Início"
    },
    {
      url: "/pesquisa",
      label: "Pesquisar"
    },
    {
      url: "",
      label: "Denunciar"
    },
    {
      url: "/documentacao",
      label: "Ajuda"
    },
    {
      url: "/perfil",
      label: "Perfil"
    },
  ]

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <header>

        <section className="headerContainer">
          <div className="logoHeader">
            <Link to="/"><img src={logo} alt='Login icone' className='icone'></img></Link>
          </div>

          <nav className="navbar">
            <ul className={`menu ${openMenu ? "open" : ""}`}>
              {items.map((item, index) => (
                <NavItem
                  key={index}
                  url={item.url}
                  label={item.label}
                />
              ))}
            </ul>
            <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <FaXmark /> : <FaBars />}
            </button>
          </nav>
        </section>

      </header>
    </>
  )
}

export default Header
