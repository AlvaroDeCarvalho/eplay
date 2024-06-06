import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('/checkout')
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
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
              Total de {formatPrice(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              type="button"
              onClick={() => {
                closeCart()
                goToCheckout()
              }}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <div>
            <p className="emptyCart">
              Seu Carrinho esta vazio, adicione pelo menos um item para
              continuar com a compra
            </p>
            <Button
              type="button"
              onClick={() => {
                closeCart()
                navigate('/')
              }}
            >
              Ver jogos
            </Button>
          </div>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
