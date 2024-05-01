import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          facilis, doloribus placeat repudiandae obcaecati corporis sint,
          eveniet dolorum qui velit pariatur. Fugit autem, consectetur neque
          consequuntur nesciunt tenetur laboriosam expedita.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          facilis, doloribus placeat repudiandae obcaecati corporis sint,
          eveniet dolorum qui velit pariatur. Fugit autem, consectetur neque
          consequuntur nesciunt tenetur laboriosam expedita.
        </p>
      </Section>
      <Section title="Mais detalhes" background="black">
        <p>fotos</p>
      </Section>
    </>
  )
}

export default Product
