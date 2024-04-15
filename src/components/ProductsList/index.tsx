import Product from '../Product'
import { Container, List } from './styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="teteca"
            infos={['em breve']}
            system="Windows"
            title="teteca ultra"
            image={'//placehold.it/222x250'}
            key={title}
          />
          <Product
            category="Ação"
            description="teteca"
            infos={['em breve']}
            system="Windows"
            title="teteca ultra"
            image={'//placehold.it/222x250'}
            key={title}
          />
          <Product
            category="Aventura"
            description="teteca aventureira"
            infos={['-10%', 'R$ 150']}
            system="IOS"
            title="teteca curiosa"
            image={'//placehold.it/222x250'}
            key={title}
          />

          <Product
            category="Ação"
            description="teteca"
            infos={['em breve']}
            system="Windows"
            title="teteca ultra"
            image={'//placehold.it/222x250'}
            key={title}
          />
        </List>
      </div>
    </Container>
  )
}
export default ProductsList
