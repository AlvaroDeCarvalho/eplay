import { GlobalCss, Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Exemplo } from './pages/Exemplo/exemplo'
import { Home } from './pages/Home/Home'
function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/exemplo',
      element: <Exemplo />
    }
  ])
  return (
    <>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
