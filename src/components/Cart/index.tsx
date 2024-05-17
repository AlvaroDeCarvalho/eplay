import Button from '../Button'
import * as S from './styles'
import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.SideBar>
        <ul>
          <S.CartItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do produto</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do produto</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.Quantity>2 Jogos no carrinho</S.Quantity>
        <S.Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button type="button">Continuar com a compra</Button>
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
