import React, { Component } from 'react';
import {Route ,Switch} from 'react-router-dom';
import Home from './Home'
import Ranking from './Ranking'
import Search from './Search'
class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/ranking" component={Ranking}></Route>
          <Route path="/search" component={Search}></Route>     
        </Switch> 
      </div>
    );
  }
}

export default Main;
