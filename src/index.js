import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './useEffectHook/Timer'
import Component2 from './useRefHook/Component2'
import Checkbox from './useReducerHook/Checkbox'
import Showcategory from './treeview/Showcategory'
import Datashowtree from './treeview/Datashowtree';
import Todolist from './Todolist/Todolist';
import RatingStars from './StarRating/RatingStars';
import Starrating from './StarRating/Starrating'
ReactDOM.render(
  <React.StrictMode>
    {/* <Component2 /> */}
    {/* <Checkbox/> */}
    {/* <Showcategory/> */}
    {/* <Datashowtree/> */}
    {/* <Todolist/> */}
    {/* <RatingStars/> */}
    <Starrating/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
