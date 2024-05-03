import Section from '../Section'

import * as S from './styles'

import Zelda from '../../assets/images/zelda.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: Zelda
  },
  {
    type: 'imagem',
    url: hogwarts
  },
  {
    type: 'imagem',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/vPBkhfhZ44o?si=VvktFZXNvIxapDUx'
  }
]

interface GalleryItem {
  type: 'imagem' | 'video'
  url: string
}
type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisibal: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisibal: false,
    type: 'imagem',
    url: ''
  })

  const exitModal = () => {
    setModal({
      isVisibal: false,
      type: 'imagem',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((item) => (
            <>
              <S.Item
                key={item.url}
                onClick={() => {
                  setModal({
                    isVisibal: true,
                    type: item.type,
                    url: item.url
                  })
                }}
              >
                <img src={getMediaCover(item)} alt={name} />
                <S.Action>
                  <img
                    src={getMediaIcon(item)}
                    alt={`ver spoiler do jogo ${name}`}
                  />
                </S.Action>
              </S.Item>
            </>
          ))}
        </S.Items>
      </Section>

      <S.Modal className={modal.isVisibal ? 'active' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => exitModal()} />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => exitModal()}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
