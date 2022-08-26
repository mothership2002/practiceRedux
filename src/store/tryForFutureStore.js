import { createSlice } from "@reduxjs/toolkit";

export const tryForFutureStore = createSlice({

    name: 'tryForFuture',

    initialState: {
        tryForFuture: "BBBBBB.",
    },

    reducers: {
        setTryForFuture: (state, action) => {
            state.tryForFuture = action.payload;
        },
    },
})

export const { setTryForFuture, } = tryForFutureStore.actions;

export default tryForFutureStore.reducer;