import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}
const Product = ({
  title,
  category,
  description,
  image,
  infos,
  system
}: Props) => {
  return (
    <S.Card>
      <S.ComponentesInfo>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.ComponentesInfo>
      <img src={image} alt={title} />
      <S.Titulo>{title}</S.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Paragrafo>{description}</S.Paragrafo>
    </S.Card>
  )
}

export default Product
