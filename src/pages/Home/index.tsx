import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import {
  useGetFeaturedEmBreveQuery,
  useGetFeaturedPromocoesQuery
} from '../../services/api'

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
