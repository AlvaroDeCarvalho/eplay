import Button from '../Button'
import Tag from '../Tag'
import { Game } from '../../pages/Home'

import * as S from './styles'

import { formatPrice } from '../ProductsList/index'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addGameToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

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
              <Button type="button" variant="primary" onClick={addGameToCart}>
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
