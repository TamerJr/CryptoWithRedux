import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Features/Features";
import { cryptoApiNews } from "../Features/CryptoNewsApi";



 const store =configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoApiNews.reducerPath]:cryptoApiNews.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(cryptoApiNews.middleware, cryptoApi.middleware)
    
})
export default store