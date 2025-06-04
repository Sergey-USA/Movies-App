import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice(
    {
        name: "favorites",
        initialState: [],
        reducers: {
            addFavorites: (state, action) => [...state, action.payload],
            removeFavorites: (state, action) => state.filter(movie => movie.id !== action.payload),
        },
            
    }
)

export const {addFavorites, removeFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;