import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1b6b7a6078msh110cf9747436a82p1c2029jsnb3572d52b80f', 
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest=url=>({url,headers:cryptoApiHeaders})
export const cryptoApiNews=createApi({
    reducerPath:"cryptoApiNews",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: builder=>({
        getCryptoNews:builder.query({
            query:({category,count})=>createRequest(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery}=cryptoApiNews;