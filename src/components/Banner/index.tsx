import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => {
  return (
    <S.Imagem>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <S.Titulo>
            Marvel &apos;s Spider-Man: Miles Morales PS4 & PS5
          </S.Titulo>

          <S.precos>
            De R$ <span>250,00</span> <br />
            por apenas 99,99
          </S.precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="cloque aqui para apoveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
