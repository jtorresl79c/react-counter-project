import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {
  render() {
    return (
        <div>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
  }
}
