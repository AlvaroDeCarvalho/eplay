import * as S from './styles'

import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                <Link
                  to="/categorias"
                  title="clique aqui para acessar a seção de categorias"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </S.Elementos>
              <S.Elementos to={'/novidades'}>
                <HashLink
                  to="/#coming-soon"
                  title="clique aqui para acessar a seção de Novidades"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Novidades
                </HashLink>
              </S.Elementos>
              <S.Elementos to={'/promocoes'}>
                <HashLink
                  to="/#on-sale"
                  title="clique aqui para acessar a seção de promoções"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </HashLink>
              </S.Elementos>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          <p>{items.length}</p>
          <span> - produto(s)</span>
          <img src={cartIcon} />
        </S.CartButton>
      </S.headerRow>

      <S.navMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.Elementos to={'/categorias'}>
            <a href="#" title="clique aqui para acessar a seção de categorias">
              Categorias
            </a>
          </S.Elementos>
          <S.Elementos to={'/novidades'}>
            <a href="#" title="clique aqui para acessar a seção de Novidades">
              Novidades
            </a>
          </S.Elementos>
          <S.Elementos to={'/promocoes'}>
            <a href="#" title="clique aqui para acessar a seção de promoções">
              Promoções
            </a>
          </S.Elementos>
        </S.Links>
      </S.navMobile>
    </S.HeaderBar>
  )
}
export default Header
