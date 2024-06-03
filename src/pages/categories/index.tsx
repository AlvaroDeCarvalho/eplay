import ProductsList from '../../components/ProductsList'

import * as API from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    API.useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingSport } =
    API.useGetSportGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingsimulation } =
    API.useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadinFight } =
    API.useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = API.useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesLuta}
        title="Lutas"
        background="black"
        id="fight"
        isLoading={isLoadinFight}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingsimulation}
      />
    </>
  )
}
export default Categories
