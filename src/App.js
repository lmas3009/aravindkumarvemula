import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Routers from './Main/Router';

function App() {
  return (
   <Routers/>
  );
}

export default App;
