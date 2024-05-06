import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}
const Product = ({
  title,
  category,
  description,
  image,
  infos,
  system,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <S.Card to={`/product/${id}`}>
      <S.ComponentesInfo>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.ComponentesInfo>
      <img src={image} alt={title} />
      <S.Titulo>{title}</S.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Paragrafo>{getDescricao(description)}</S.Paragrafo>
    </S.Card>
  )
}

export default Product
