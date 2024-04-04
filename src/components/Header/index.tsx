import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <img src={logo} alt="eplay" />

        <nav>
          <S.Links>
            <S.Elementos to={'/exemplo'}>
              <a href="#">Categorias</a>
            </S.Elementos>
            <S.Elementos to={'/exemplo'}>
              <a href="#">Novidades</a>
            </S.Elementos>
            <S.Elementos to={'/exemplo'}>
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
