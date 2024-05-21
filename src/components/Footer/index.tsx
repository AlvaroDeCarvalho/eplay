import * as S from './styles'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/categorias#rpg">RPG</S.Link>
            </li>

            <li>
              <S.Link to="/categorias#action">Ação</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#sport">Esportes</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#simulation">Simulação</S.Link>
            </li>
            <li>
              <S.Link to="/categorias#fight">Luta</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rapido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/#on-sale">Promoções</S.Link>
            </li>
            <li>
              <S.Link to="/#coming-soon">Em breve </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <p>{year} - &copy; E-PLAY Todos os diretos reservados</p>
        </S.FooterSection>
      </div>
    </S.Container>
  )
}

export default Footer
