import Section from '../Section'

import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import * as S from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisibal: boolean
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
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
          {itens.map((item, index) => (
            <>
              <S.Item
                key={index}
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
