import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleIncrement(id){
        this.props.onIncrement(id)
    }

    handleDelete(id){
        this.props.onDelete(id)
    }

    render() {
        let id = this.props.counter.id
        let count = this.props.counter.value
        return (
            <div className='d-flex mb-2'>
                <span className={"badge " + (count<=0 ? "bg-warning" : "bg-primary") + " d-flex align-items-center me-2"}>{count === 0 ? "Zero" : count}</span>
                <button className="btn btn-secondary" onClick={ () => this.handleIncrement(id) }>Increment</button>
                <button className="btn btn-danger ms-2" onClick={ () => this.handleDelete(id) }>Delete</button>
            </div>
        )
    }
}
