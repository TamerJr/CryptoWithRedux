import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders={
		'X-RapidAPI-Key': '1b6b7a6078msh110cf9747436a82p1c2029jsnb3572d52b80f',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
const baseUrl="https://coinranking1.p.rapidapi.com"

const createRequest=(url)=>({url ,headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCrypto:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),

    })
})
export const {useGetCryptoQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery}=cryptoApi;