import Tag from '../Tag'
import * as S from './styles'
const Product = () => {
  return (
    <S.Card>
      <img src={'//placehold.it/222x250'} />
      <S.Titulo>Nome Do Jogo</S.Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <S.Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias
        natus eum blanditiis quas veritatis, earum accusantium placeat cum?
        Voluptatem, dolorum. Ad explicabo illum molestiae rem sed? Voluptatem,
        pariatur. Eligendi?
      </S.Paragrafo>
    </S.Card>
  )
}

export default Product
