import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual!.prices!.current!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => {
            return (
              <S.CartItem key={item.id}>
                <img src={item.media.thumbnail} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <Tag>{item.details.category}</Tag>
                  <Tag>{item.details.system}</Tag>
                  <span>{formatPrice(item.prices?.current)}</span>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} />
              </S.CartItem>
            )
          })}
        </ul>
        <S.Quantity>{items.length} Jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de {formatPrice(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button type="button">Continuar com a compra</Button>
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
