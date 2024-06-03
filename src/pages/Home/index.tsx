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
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetFeaturedEmBreveQuery()
  const { data: soonGames, isLoading: isLoadingSoon } =
    useGetFeaturedPromocoesQuery()

  return (
    <>
      <Banner />
      <ProductsList
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        games={soonGames!}
        title="promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        games={onSaleGames!}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
