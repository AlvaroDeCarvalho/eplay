import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import { formatPrice } from '../ProductsList/index'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <>
      <S.Banner backgroundcover={game.media.cover}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <S.Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices?.discount && (
                <span>De {formatPrice(game.prices?.old)} </span>
              )}

              {game.prices?.current && (
                <>por {formatPrice(game.prices?.current)}</>
              )}
            </p>
            {game.prices?.current && (
              <Button type="button" variant="primary">
                Adicionar ao carrinho
              </Button>
            )}
          </S.Infos>
        </div>
      </S.Banner>
    </>
  )
}
export default Hero
