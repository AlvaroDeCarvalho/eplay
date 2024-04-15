import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      )
    }
  ])
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
