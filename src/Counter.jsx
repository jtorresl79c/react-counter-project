import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: this.props.counter.value
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleIncrement(){
        this.setState( state => ({ count: state.count+1 }) )
    }

    handleDelete(id){
        this.props.onDelete(id)
    }

    render() {
        let id = this.props.counter.id
        let value = this.props.counter.value
        let count = this.state.count
        return (
            <div className='d-flex mb-2'>
                <span className={"badge " + (count<=0 ? "bg-warning" : "bg-primary") + " d-flex align-items-center me-2"}>{count === 0 ? "Zero" : count}</span>
                <button className="btn btn-secondary" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger ms-2" onClick={ () => this.handleDelete(id) }>Delete</button>
            </div>
        )
    }
}
