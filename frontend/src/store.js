import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import { apiSlice } from "./slices/apiSlice";
import productReducer from "./slices/products/productSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store