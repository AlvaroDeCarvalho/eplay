import Product from '../Product'

import { Container, List } from './styles'
import { formatPrice } from '../../utils'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[] | undefined
  id?: string
  isLoading?: boolean
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    //estamos criando um array onde ficarar armazenado nossas informações,
    // vamos fazer um push de acordo com a situação
    const tags = []

    //se o game estiver em lançamento, nos iremos fazer um push da data de lançamento
    if (game.release_date) {
      tags.push(game.release_date)
    }
    //se o game estiver em desconto iremos puxar
    // o desconto para o array, e logo apos puxaremos o preço ja com  a formatação
    if (game.prices?.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices?.current) {
      tags.push(formatPrice(game.prices.current))
    }
    return tags
  }
  if (isLoading) return <Loader />
  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((item) => (
              <li key={item.id}>
                <Product
                  id={item.id}
                  category={item.details.category}
                  description={item.description}
                  infos={getGameTags(item)}
                  system={item.details.system}
                  title={item.name}
                  image={item.media.thumbnail}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductsList
