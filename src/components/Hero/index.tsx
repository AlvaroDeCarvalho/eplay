import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
const Hero = () => {
  return (
    <>
      <S.Banner>
        <div className="container">
          <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
          <S.Infos>
            <h2>Hogwarts Legacy</h2>

            <p>
              <span>De R$ 250,00 </span>
              por R$ 190.00
            </p>
            <Button type="button" variant="primary">
              Adicionar ao carrinho
            </Button>
          </S.Infos>
        </div>
      </S.Banner>
    </>
  )
}
export default Hero
