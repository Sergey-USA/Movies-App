import { createSlice } from "@reduxjs/toolkit";

const bgrImgSlice = createSlice({
    name: "bgrImg",
    initialState: {bgrPath: "https://image.tmdb.org/t/p/original/hfTyu2VPBqLRPo2DauW8q7bh9bm.jpg"},
    reducers: {
        setBgrImg: (state, action) => { state.bgrPath = action.payload;},
        
    }
})

export const {setBgrImg} = bgrImgSlice.actions;
export default bgrImgSlice.reducer;