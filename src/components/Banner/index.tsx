import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import { Game } from '../../pages/Home/Home'

import { formatPrice } from '../ProductsList/index'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <S.Imagem>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <S.Titulo>{game?.name}</S.Titulo>

          <S.precos>
            De R$ <span>{formatPrice(game.prices?.old)}</span> <br />
            por apenas {formatPrice(game.prices?.current)}
          </S.precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="cloque aqui para apoveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
