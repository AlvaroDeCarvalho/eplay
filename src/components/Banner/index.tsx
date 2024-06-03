import Button from '../Button'
import Tag from '../Tag'
import Loader from '../Loader'

import * as S from './styles'

import { formatPrice } from '../../utils'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  //renomenado a resposta da data para game, ou seja, no codigo ele é tratado como game
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }
  return (
    <S.Image backgroundBanner={game.media.cover}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <S.Title>{game.name}</S.Title>

          <S.Prices>
            De R$ <span>{formatPrice(game.prices?.old)}</span> <br />
            por apenas {formatPrice(game.prices?.current)}
          </S.Prices>
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
    </S.Image>
  )
}

export default Banner
