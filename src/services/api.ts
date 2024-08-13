import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as ENUMS from './query.enum'
type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }

  delivery: {
    email: string
  }

  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurscheResponse = {
  orderId: string
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL_API
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => ENUMS.QUERY.DESTAQUE
    }),
    getFeaturedPromocoes: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.PROMOCOES
    }),
    getFeaturedEmBreve: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.EM_BREVE
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.ACAO
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.ESPORTES
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.SIMULACAO
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.LUTA
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => ENUMS.QUERY.RPG
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `${ENUMS.QUERY.JOGOS}/${id}`
    }),
    purchase: builder.mutation<PurscheResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetFeaturedPromocoesQuery,
  useGetFeaturedEmBreveQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
