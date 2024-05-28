import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import { formatPrice } from '../ProductsList/index'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  //renomenado a resposta da data para game, ou seja, no codigo ele é tratado como game
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <S.Imagem backgroundBanner={game.media.cover}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <S.Titulo>{game.name}</S.Titulo>

          <S.precos>
            De R$ <span>{formatPrice(game.prices?.old)}</span> <br />
            por apenas {formatPrice(game.prices?.current)}
          </S.precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="cloque aqui para apoveitar esta oferta"
          variant="secundary"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
