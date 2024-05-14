import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import Categories from './pages/categories'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/categorias'} element={<Categories />} />
    <Route path={'/product/:id'} element={<Product />} />
  </Routes>
)

export default Rotas
