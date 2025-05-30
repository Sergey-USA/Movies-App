import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice(
    {
        name: "favorites",
        initialState: [],
        reducers: {
            addFavorites: (state, action) => [...state, action.payload]},
    }
)

export const {addFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;