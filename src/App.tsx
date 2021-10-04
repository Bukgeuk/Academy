import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home'
import Lecture from './page/Lecture';
import NotFound from './page/NotFound'
import './App.module.scss'
import About from './page/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/c++' component={() => <Lecture lectureId="0"></Lecture>}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
