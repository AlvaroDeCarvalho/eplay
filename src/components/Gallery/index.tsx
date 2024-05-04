import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home/Home'

import * as S from './styles'

import Zelda from '../../assets/images/zelda.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: Zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/vPBkhfhZ44o?si=VvktFZXNvIxapDUx'
  }
]

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
    type: 'image',
    url: ''
  })

  const exitModal = () => {
    setModal({
      isVisibal: false,
      type: 'image',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
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
          {modal.type === 'image' ? (
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
