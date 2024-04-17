import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: resident,
    infos: ['10%', 'R$250,00']
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Diablo 4',
    system: 'Windows e xbox',
    image: diablo,
    infos: ['15%', 'R$450,00']
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Zelda ',
    system: 'Windows e nitendo',
    image: zelda,
    infos: ['10%', 'R$130,00']
  },
  {
    id: 4,
    category: 'Guerra',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Star Wars',
    system: 'Windows',
    image: starWars,
    infos: ['10%', 'R$250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Resident Evil 4',
    system: 'Windows',
    image: resident,
    infos: ['em breve']
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Diablo 4',
    system: 'Windows e xbox',
    image: diablo,
    infos: ['em breve']
  },
  {
    id: 7,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Zelda ',
    system: 'Windows e nitendo',
    image: zelda,
    infos: ['em breve']
  },
  {
    id: 8,
    category: 'Guerra',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Star Wars',
    system: 'Windows',
    image: starWars,
    infos: ['em B']
  }
]

export const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={promocoes} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}
