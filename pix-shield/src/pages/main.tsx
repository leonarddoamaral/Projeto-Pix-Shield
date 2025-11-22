import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Documentacao from './Documentacao'
import Login from './Login'
import Cadastro from './Cadastro'
import PerfilUser from './Perfil'
import Registro from './Registro/Registro'
import Sucesso from './confimaDenuncia/Denuncia'
import Erro from './error'
import Pesquisar from './Pesquisa'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/login", element: <Login />},
  {path: "/cadastro", element: <Cadastro />},
  {path: "/documentacao", element: <Documentacao />},
  {path: "/home", element: <Home />},
  {path: "/perfil", element: <PerfilUser />},
  {path: "/registro", element: <Registro/>},
  {path: "/sucesso", element:<Sucesso/>},
  {path: "/erro",element:<Erro/>},
  {path: "/pesquisa", element: <Pesquisar />}
  // {path: "/perfil", element: }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
