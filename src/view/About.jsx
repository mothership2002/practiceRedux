import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setStrA } from '../store/commonStore';
import { useNavigate } from 'react-router-dom';

function About() {

  const navigate = useNavigate();
  const commonStrA = useSelector((state) =>
    state.common.testStrA
  );
  const dispatch = useDispatch();

  // about - 버튼 전역 변수가 변경됨
  // 변경이 유지됨

  useEffect(() => {

  }, []);

  return (
    <>
      <div>About</div>
      {commonStrA}
      <button onClick={() => {
        dispatch(setStrA("CCCCCC"));
      }}>CCchange</button>
      <br />
      <button onClick={() => { navigate("/") }}>go to home</button>
      <button onClick={() => navigate("/example")}>go to example</button>
    </>
  );
}

export default About