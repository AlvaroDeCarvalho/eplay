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
              <S.Link>RPG</S.Link>
            </li>

            <li>
              <S.Link>Ação</S.Link>
            </li>
            <li>
              <S.Link>Aventura</S.Link>
            </li>
            <li>
              <S.Link>Esportes</S.Link>
            </li>
            <li>
              <S.Link>Estrategia</S.Link>
            </li>
            <li>
              <S.Link>FPS</S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rapido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link>Novidades</S.Link>
            </li>
            <li>
              <S.Link>Promoções</S.Link>
            </li>
            <li>
              <S.Link>Em breve </S.Link>
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
