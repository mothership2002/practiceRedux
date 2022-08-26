import { configureStore } from "@reduxjs/toolkit"

import commonStoreReducer from "../store/commonStore"
import newStore from "./newStore";
import tryForFutureStore from "./tryForFutureStore"
import prayForFutureStore from "./prayForFutureStore";
import hopeFutureStore from "./hopeFutureStore";


// 상태 스토어 
// 스토어 작성, 통합 스토어에 지정,
export default configureStore({
    reducer : {
        common : commonStoreReducer,
        new : newStore,                 // 스토어 쪼개기
        tryForFuture : tryForFutureStore, 
        prayForFuture : prayForFutureStore,
        hopeFuture : hopeFutureStore,
    },
});