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
  const getDescricao = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <S.Card to={`/product/${id}`}>
      <S.ComponentsInfos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.ComponentsInfos>
      <img src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Text>{getDescricao(description)}</S.Text>
    </S.Card>
  )
}

export default Product
