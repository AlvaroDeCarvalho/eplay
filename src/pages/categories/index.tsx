import ProductsList from '../../components/ProductsList'

import { Game } from '../Home/Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={promocoes} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}
export default Categories
