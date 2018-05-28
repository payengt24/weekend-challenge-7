import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Admin from '../Admin/Admin';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <br/>

          <Route exact path='/comments' component={Comments} />
          <Route exact path='/' component={Feeling} />
          <Route exact path='/supported' component={Supported} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/thankYou' component={ThankYou} />

      </div>
      </Router>
    );
  }
}

export default connect()(App);
