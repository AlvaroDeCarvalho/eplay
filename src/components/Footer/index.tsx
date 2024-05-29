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
              <S.Link
                title="clique aqui para acessar jogos de rpg"
                to="/categorias#rpg"
              >
                RPG
              </S.Link>
            </li>

            <li>
              <S.Link
                title="clique aqui para acessar jogos de Ação"
                to="/categorias#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar jogos de Esportes"
                to="/categorias#sport"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar jogos de Simulação"
                to="/categorias#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar jogos de Luta"
                to="/categorias#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rapido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="clique aqui para acessar a seção de Promoções"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em breve{' '}
              </S.Link>
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
