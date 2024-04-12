import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import ProductsList from './components/ProductsList'
function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
          <ProductsList title="promoções" background="gray" />
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
