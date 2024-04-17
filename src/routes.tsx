import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Categories } from './pages/categories'

const Rotas = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/categorias'} element={<Categories />} />
  </Routes>
)

export default Rotas
