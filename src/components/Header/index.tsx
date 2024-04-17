import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
const Header = () => {
  return (
    <S.HeaderBar>
      <div>
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
      <S.LinkCart>
        0 - produto(s)
        <img src={carrinho} />
      </S.LinkCart>
    </S.HeaderBar>
  )
}
export default Header
