import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.headerRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <S.ImagemLink to={'/'}>
            <img src={logo} alt="eplay" />
          </S.ImagemLink>
          <nav>
            <S.Links>
              <S.Elementos to={'/categorias'}>
                <a href="#">Categorias</a>
              </S.Elementos>
              <S.Elementos to={'/novidades'}>
                <a href="#">Novidades</a>
              </S.Elementos>
              <S.Elementos to={'/promocoes'}>
                <a href="#">Promoções</a>
              </S.Elementos>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          <p>{items.length}</p>
          <span> - produto(s)</span>
          <img src={carrinho} />
        </S.CartButton>
      </S.headerRow>

      <S.navMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.Elementos to={'/categorias'}>
            <a href="#">Categorias</a>
          </S.Elementos>
          <S.Elementos to={'/novidades'}>
            <a href="#">Novidades</a>
          </S.Elementos>
          <S.Elementos to={'/promocoes'}>
            <a href="#">Promoções</a>
          </S.Elementos>
        </S.Links>
      </S.navMobile>
    </S.HeaderBar>
  )
}
export default Header
