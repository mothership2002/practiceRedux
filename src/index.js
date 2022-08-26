import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import Home from './view/Home';

import Example from './view/Example';
import About from './view/About.jsx';
import User from './view/User';

// const App = React.lazy(() => import("./App"))
// const User = React.lazy(() => import("./view/User"))
// const About = React.lazy(() => import("./view/About"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //   <App />
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/example" element={<Example></Example>}>
        </Route>
        <Route path="/about" element={<About></About>} caseSensitive>
        </Route>
        <Route path="/user" element={<User></User>}>
        </Route>
        <Route path="/" element={<Home></Home>} caseSensitive>
        </Route>
      </Routes>
    </Router>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
