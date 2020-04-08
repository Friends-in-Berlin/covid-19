import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/home/Home';
import News from './Components/news/News';
import Protection from './Components/protection/Protection';
import Warning from './Components/warning/Warning';
import Support from './Components/support/Support';
import Nav from './Components/navbar/Nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/news' component={News} />
          <Route path='/protection' component={Protection} />
          <Route path='/warning' component={Warning} />
          <Route path='/support' component={Support} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
