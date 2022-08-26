import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from './view/Home';

const Home = React.lazy(() => import("./view/Home"))

function App() {
  return (
    <Home></Home>
  );
}

// 원래 빌드하면 전체 코드가 하나로 뭉친다
// 모든 컴포넌트 js로 합쳐짐
// lazy

export default App;
