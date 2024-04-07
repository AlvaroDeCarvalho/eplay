import * as S from './styles'

const Banner = () => {
  return (
    <S.Imagem>
      <div className="container">
        <S.Titulo>Marvel &apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>

        <S.precos>
          De R$ <span>250,00</span> <br />
          por apenas 99,99
        </S.precos>
      </div>
    </S.Imagem>
  )
}

export default Banner
