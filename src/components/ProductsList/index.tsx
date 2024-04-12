import Product from '../Product'
import { Container, List } from './styles'
type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <div className="container">
      <Container>
        <h2>{title}</h2>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </Container>
    </div>
  )
}
export default ProductsList
