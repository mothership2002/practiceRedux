import { createSlice } from "@reduxjs/toolkit";

export const hopeFutureStore = createSlice({

    name: "hopeFuture",

    initialState: {
        hopeFuture: "",
    },

    reducers: {
        setHopeFuture : (state, action) => {
            state.hopeFuture = action.payload
        }
    },

})

export const { setHopeFuture, } = hopeFutureStore.actions;

export default hopeFutureStore.reducer;