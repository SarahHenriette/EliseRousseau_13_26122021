import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/Store'
import './index.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { useNavigate } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/user" element={<User/>} />
        
        </Routes>
     </Router>
    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
