import { createSlice } from "@reduxjs/toolkit";

export const commonStore = createSlice({
    //name : store 이름
    name: 'common',

    //state 상태 변수 
    initialState: {
        testStrA: 'AAAAA', // default 
    },

    //reducer 동작
    reducers: {
        //state : 위에 initialState, action : 실행한 곳에서 넣은 값
        setStrA: (state, action) => {
            state.testStrA = action.payload;
        },
        deleteTestStrA: (state) => {
            state.testStrA = "";
        }
    }
});

//reduces 에 있는 것들 추가
export const { setStrA, deleteTestStrA, } = commonStore.actions;

export default commonStore.reducer;