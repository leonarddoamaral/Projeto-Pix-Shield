import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Documentacao from './Documentacao'
import Login from './Login'
import Cadastro from './Cadastro'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/login", element: <Login />},
  {path: "/cadastro", element: <Cadastro />},
  {path: "/documentacao", element: <Documentacao />},
  {path: "/home", element: <Home />}
  // {path: "/perfil", element: }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
