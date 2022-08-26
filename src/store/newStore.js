import { createSlice } from "@reduxjs/toolkit";

export const newStore = createSlice({
    //name : store 이름
    name: 'new',

    //state 상태 변수 
    initialState: {
        testValue: "default value",
    },

    //reducer 동작
    reducers: {
        setTestValue: (state,action) => {
            state.setTestValue = action.payload;
        }
    }
});

//reduces 에 있는 것들 추가
export const { setTestValue, } = newStore.actions;

export default newStore.reducer;