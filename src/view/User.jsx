import React from 'react';
import D1 from '../component/D1';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {

  const navigate = useNavigate();
  const commonStrA = useSelector((state) =>
    state.common.testStrA
  );

  return (
    <>
      <div>{commonStrA}</div>
      <D1 test="testValue"></D1>
      <button onClick={() => navigate("/")}>go to home</button>
      <button onClick={() => navigate("/example")}>go to example</button>
    </>
  )
}

export default User