import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api/moviesApi";
import authReducer from "./Features/Auth/authSlice";
import bgrReducer from "./Features/Background/bgrImgSlice";
import favoriteReducer from "./Features/Favorites/favoritesSlice"

export const store = configureStore(
    {
        reducer: {
            [moviesApi.reducerPath]: moviesApi.reducer,
            auth: authReducer,
            bgrImg: bgrReducer,
            favorites: favoriteReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(moviesApi.middleware),
    }
)