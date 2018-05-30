import React, { Component } from 'react';
import Banner from './Banner'
import Radio from './Radio'
import HomeFooter from './HomeFooter'
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Banner />
        <Radio />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
