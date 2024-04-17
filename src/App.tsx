import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import { GlobalCss } from './styles'
import Header from './components/Header'

/*    Maneira convencional de usar o rounter

const rotas = createBrowserRounter([
  {
    path: '/' ,
    element : <Home />
  }
])
*/

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      {/* <RouterProvider router = {rotas} /> */}
    </BrowserRouter>
  )
}

export default App
