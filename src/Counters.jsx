import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {

    constructor(props){
        super(props)
        this.state = {
            counters: [
                {id: 1, value: 5},
                {id: 2, value: 0},
                {id: 3, value: 0},
                {id: 4, value: 0},
                {id: 5, value: 0},
            ]
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id){
        let counters = this.state.counters.filter( counter => (counter.id !== id) )
        this.setState({counters})
    }


    render() {
        return (
            <div>
                {
                    this.state.counters.map( counter => <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}/> )
                }
            </div>
        );
    }
}
