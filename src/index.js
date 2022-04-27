import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import CommentBox from './Compoents/CommentBox';
import Star from './Compoents/Star';
import TaskBar from './Compoents/TaskBar';

ReactDOM.render(
 
    <HashRouter>
    <Routes>
      <Route path="/" element={<App></App>}/>
      <Route path="/CommentBox" element={<CommentBox/>}/>
      <Route path="/TaskList" element={<TaskBar/>}/>
      <Route path='/Star' element={<Star></Star>}/>
      <Route path="/FoodApp" element={<h1>FoodApp</h1>}/>
      <Route path="/EmailBox" element={<h1>EmailBox</h1>}/>
      <Route path="/GithubRepoComparison" element={<h1>GithubRepoComparison</h1>}/>
    </Routes>
    </HashRouter>
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
