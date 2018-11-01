import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header id="header" className="">
        <div className="content">
          <div id="logo"><a href="/">Sendether</a></div>
          {/* <nav id="nav">
            <ul>
              <li><Link to="/" className=""></Link></li>
              <li><Link to="/" className=""></Link></li>
            </ul>
          </nav> */}
        </div>
      </header>
    )
  }
}
export default NavBar;