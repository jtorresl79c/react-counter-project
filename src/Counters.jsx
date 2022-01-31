import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {

    constructor(props){
        super(props)
        this.state = {
            counters: [
                {id: 1, value: 5},
                {id: 2, value: 1},
                {id: 3, value: 7},
                {id: 4, value: 3},
                {id: 5, value: 8}
            ]
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.updateContructors = this.updateContructors.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(id){
        let counters = this.state.counters.map( counter => counter.id == id ? ( { ...counter, value: counter.value+1 } ) : counter )
        this.setState({ counters })
    }

    handleDelete(id){
        let counters = this.state.counters.filter( counter => (counter.id !== id) )
        this.setState({counters})
    }

    updateContructors(){
        let counters = this.state.counters.map( counter => ({...counter, value: 0}))
        this.setState({counters})
    }


    render() {
        return (
            <div>
                {
                    this.state.counters.map( counter => <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/> )
                }
                <button className="btn btn-primary" onClick={this.updateContructors}>Reset</button>
            </div>
        );
    }
}
