import { createSlice } from "@reduxjs/toolkit"

export const prayForFutureStore = createSlice({

    name: "prayForFuture",

    initialState: {
        prayForFuture: "DDDDDD.",
    },

    reducers: {
        setPrayForFuture: (state, action) => {
            state.prayForFuture = action.payload;
        }
    },
})

export const { setPrayForFuture, } = prayForFutureStore.actions;

export default prayForFutureStore.reducer;