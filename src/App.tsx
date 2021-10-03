import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import MenuBar from './component/MenuBar';
import Home from './page/Home'
import NotFound from './page/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/*<Route path='/c++'></Route>*/}
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
