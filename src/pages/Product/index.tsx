import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useParams } from 'react-router-dom'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id as string)

  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Idiomas:</b> O jogo oferece suporte para tais idiomas:
          {game.details.languages.join(', ')} <br />
          <b>Editora:</b> {game.details.publisher}
        </p>
      </Section>

      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        itens={game.media.gallery}
      />
    </>
  )
}

export default Product
