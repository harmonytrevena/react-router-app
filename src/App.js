import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Importing my components
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
              <Link to='/'>Home</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/about'>About</Link>
          </nav>
          </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <h2>Page Not Found!</h2>
            <Link to="/">Return to Homepage</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
