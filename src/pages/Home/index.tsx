import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import {
  useGetFeaturedEmBreveQuery,
  useGetFeaturedPromocoesQuery
} from '../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices?: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

export const Home = () => {
  const { data: onSaleGames } = useGetFeaturedEmBreveQuery()
  const { data: soonGames } = useGetFeaturedPromocoesQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={soonGames} title="promoções" background="gray" />
        <ProductsList games={onSaleGames} title="Em breve" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
