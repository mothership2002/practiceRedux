import React, { useEffect } from 'react'
import { testLog } from '../common/commonUtil'
import { useDispatch, useSelector } from 'react-redux';

// import { setStrA } from '../store/commonStore';
import { setTestValue, } from '../store/newStore';
import { setTryForFuture, } from '../store/tryForFutureStore';
import { setPrayForFuture, } from '../store/prayForFutureStore';
import { setHopeFuture, } from '../store/hopeFutureStore';
import { useNavigate } from 'react-router-dom';

function Home() {

    const testValue = useSelector((state) => state.new.testValue);
    const tryForFuture = useSelector((state) => state.tryForFuture.tryForFuture);
    const prayForFuture = useSelector((state) => state.prayForFuture.prayForFuture);
    const hopeFuture = useSelector((state) => state.hopeFuture.hopeFuture);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        //단순 공용 함수
        console.log(testValue);
        console.log(tryForFuture);
        console.log(prayForFuture);
        console.log("------------------------------------------------");
        testLog();

    }, [])

    return (
        <>
            <div>Home</div>
            <div>예제</div>
            <br />
            {tryForFuture}
            <br />
            {prayForFuture}
            <br />
            <br />
            <button onClick={() => {
                dispatch(setTryForFuture("AAAAAA."));
            }}>버튼A</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                dispatch(setPrayForFuture("CCCCCC."));
            }}>버튼C</button>
            <br /><br />
            <h2>{hopeFuture}</h2>
            <br /><br />
            <button onClick={() => {
                dispatch(setHopeFuture("WWWWWW."));
            }}>버튼W</button>
            <br />
            <br />
            <button onClick={() => { navigate("/about"); }}>go About</button>
            <button onClick={() => { navigate("/user"); }}>go User</button>
            {/* function(){
                    navigate("/about")
            } */}
        </>
    )
}

export default Home