import ProductsList from '../../components/ProductsList'

import * as API from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = API.useGetActionGamesQuery()
  const { data: gamesEsportes } = API.useGetSportGamesQuery()
  const { data: gamesSimulacao } = API.useGetSimulationGamesQuery()
  const { data: gamesLuta } = API.useGetFightGamesQuery()
  const { data: gamesRPG } = API.useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
    return (
      <>
        <ProductsList games={gamesRPG} title="RPG" background="black" />
        <ProductsList games={gamesAcao} title="Ação" background="gray" />
        <ProductsList games={gamesLuta} title="Lutas" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>carregando</h4>
}
export default Categories
