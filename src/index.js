import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import CommentBox from './Compoents/CommentBox';
import Star from './Compoents/Star';
import TaskBar from './Compoents/TaskBar';
import Chess from './Compoents/Chess';
import Progress from './Compoents/Progress';

ReactDOM.render(
 
    <HashRouter>
    <Routes>
      <Route path="/" element={<App></App>}/>
      <Route path="/Chess" element={<Chess></Chess>}/>
      <Route path="/CommentBox" element={<h1> Loading.....</h1>}/>
      <Route path="/TaskList" element={<TaskBar/>}/>
      <Route path='/Star' element={<Star></Star>}/>
      <Route path='/ProgressBar' element={<Progress></Progress>}/>
      <Route path='/TicTacToe' element={<h1> Loading.....</h1>}/>
      <Route path='/SortingVisualization' element={<h1> Loading.....</h1>}/>
      <Route path="/FoodApp" element={<h1> Loading.....</h1>}/>
      <Route path="/EmailBox" element={<h1> Loading.....</h1>}/>
      <Route path="/GithubRepoComparison" element={<h1> Loading.....</h1>}/>
    </Routes>
    </HashRouter>
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
