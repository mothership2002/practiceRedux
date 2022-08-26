import React, { useEffect, useState } from 'react'
import TestItem from '../component/TestItem'
import TestItemB from '../component/TestItemB';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setStrA } from '../store/commonStore';

function Home() {

    //store의 변수 갖고오기
    const commonStrA = useSelector((state) =>
        state.common.testStrA
    );
    //store의 reducer을 동작시키기 위한 hook
    const dispatch = useDispatch();

    let navigate = useNavigate();


    // let [strB , setStrB] = useState("default");
    // set변수명은 펑션이된다

    // let str = "aaaa";

    let [showItem, setShowItem] = useState(true);

    let [data, setData] = useState();

    // 마운트
    useEffect(() => {

        console.log("--------------------------------");
        console.log("page on mounted");

        console.log("fake api request");

        setTimeout(() => {
            console.log("fake api response");
            setData(
                [
                    {
                        title: 'data0',
                        contents: 'contents0'
                    }
                ]
            )
        }, 2000);
    }, []);

    useEffect(() => {
        return () => {
            console.log("page unmounted")
        }
    }, [])

    useEffect(() => {
        console.log(showItem);
    }, [showItem])

    function itemComponent() {
        if (showItem === 'A') {
            return <TestItem hoho="asdfasdf"></TestItem>;
            //컴포넌트로 데이터를 전송
        } else if (showItem === 'B') {
            return <TestItemB></TestItemB>
        }

    }

    function showData() {
        if (!data) {
            return <div>로딩</div>
        } else if (data?.length > 0) {
            return <div>{data[0].title},{data[0].contents}</div>
        } else {
            return <div>데이타가 없다</div>
        }
    }

    return (
        <>
            {commonStrA}
            <button onClick={() => {
                // redux로 action 동작
                // store에서 쓸 동작을 import 한 것을 넣음
                dispatch(setStrA('BBBBBBB'));
            }}>redux setTest</button>
            <br />
            {/* <div>{str}</div>
            <div>{strB}</div>
            <button onClick={() => {
                console.log('11');
                str = "bbbbbbb"; // 안바뀌는 애
                setStrB("CcccccccccccccccccccccccccC"); // 바뀌는애
            }}>버튼</button> */}

            <button onClick={() => { setShowItem('A'); }}>go A</button>
            <button onClick={() => { setShowItem('B'); }}>go B</button>
            {itemComponent()}
            <br />
            <button onClick={() => { navigate("/about"); }}>go About</button>
            <button onClick={() => { navigate("/user"); }}>go User</button>
            {showData()}
        </>

    )
}

export default Home