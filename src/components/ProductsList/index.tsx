import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/Game'
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((item) => (
            <Product
              category={item.category}
              description={item.description}
              infos={item.infos}
              system={item.system}
              title={item.title}
              image={item.image}
              key={item.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductsList
