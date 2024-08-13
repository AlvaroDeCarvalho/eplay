import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useParams } from 'react-router-dom'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  // Este ID será utilizado na rota. Ele é passado pelo componente Product, 
// que contém um elemento Card. Quando clicamos no Card, somos redirecionados 
// para uma página (onde o caminho nos tras para este arquivo "/product/${id}") específica usando o ID do produto como parâmetro.

// Esse parâmetro é utilizado no componente ProductList, que itera sobre 
// uma lista de jogos (games) utilizando o elemento Product. 
// A lista de jogos é carregada na página Home.

// Vale lembrar que o componente Product, presente no arquivo "pages", 
// está pré-configurado no arquivo routes.ts.

// No componente project, utilizamos o elemento Product do arquivo "pages" 
// como caminho na rota, juntamente com o ID do produto obtido da API.
  
  const { id } = useParams()
  //esse elemento da nossa api recebe um parametro na hora de consultar noss link, uma vez que este parametro(nosso id) é integrado no link antes de fazer a consulta 
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
