import React, { Component } from 'react';
import './index.css'

export default class Item extends Component{
    // proptypes restrictions are skipped here
    state = {mouse: false}
    // handler for item got checked
    handleChecked = (id) => {
        return (event) => {
            this.props.updateToDo(id, event.target.checked)
        }
    }
    // handler for mouse entered item area
    handleMouseEnter = (flag) => {
        return () => {
            this.setState({mouse:flag})
        }
    }
    // handler for mouse left item area
    handleMouseLeave = (flag) => {
        return () => {
            this.setState({mouse:flag})
        }
    }
    // handler for deleting the item
    handleDelete = (id) => {
        return () => {
            if (window.confirm('delete comfirmation')){
                this.props.deleteToDo(id)
            }
        }
    }
    render() {
        const {id,name,isDone} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? "grey": 'white'}} onMouseLeave={this.handleMouseLeave(false)} onMouseEnter={this.handleMouseEnter(true)}>
                <label>
                    <input type='checkbox' checked={isDone} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>delete</button>
            </li>
        )
    }
}