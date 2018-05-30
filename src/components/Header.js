import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
            <a className="h-logo"></a>
            <a className="download">下载App</a>
        </div>
        <div className="nav" id="nav">
           <Link to="/" className="active">推荐</Link>
           <Link to="/ranking">排行榜</Link>
           <Link to="/search">搜索</Link> 
        </div>
      </header>
    );
  }
}

export default Header;
