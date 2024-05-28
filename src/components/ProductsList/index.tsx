import Product from '../Product'

import { Game } from '../../pages/Home'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const ProductsList = ({ title, background, games, id }: Props) => {
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

  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((item) => (
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
