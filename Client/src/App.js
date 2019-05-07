import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Search from './Search.js'
import CollegeForm from './CollegeForm.js'
import Login from './Login.js'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path = '/login' component = {Login}></Route>
          <Route exact path='/' component={Search}/>
          <Route exact path = '/form' component={CollegeForm} />
      </Switch>   
      </BrowserRouter>   
    </div>
  );
}

export default App;
