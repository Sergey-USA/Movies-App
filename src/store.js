import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api/moviesApi";
import authReducer from "@features/Auth/authSlice";
import bgrReducer from "@features/Background/bgrImgSlice";
import favoriteReducer from "@features/Favorites/favoritesSlice"

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