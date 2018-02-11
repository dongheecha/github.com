import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Page1 from './routes/page1';
import Page2 from './routes/page2';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Page1} />
              <Route exact path="/page2" component={Page2} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
