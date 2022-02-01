import React, { Component } from 'react';
import Counters from './Counters';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar/>
          <main className="container">
            <Counters/>
          </main>
        </React.Fragment>
    );
  }
}
