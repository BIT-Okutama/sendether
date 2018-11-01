import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/Header/NavBar';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="app-container">
              <Route name="home" exact path="/" component={HomePage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
