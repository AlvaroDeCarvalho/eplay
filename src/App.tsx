import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import store from './store'
import Cart from './components/Cart'
console.log(process.env.NODE_ENV)
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Rotas />
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
