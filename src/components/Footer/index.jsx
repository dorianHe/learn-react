import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component{
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllToDo: PropTypes.func.isRequired,
        removeAllDone: PropTypes.func.isRequired,
    }
    handleCheckAllToDo = (event) => {
        const {todos, checkAllToDo} = this.props
        const newToDos = todos.map((todo) => {
            if (event.target.checked)
                todo.isDone = true
            else{
                todo.isDone = false
            }
            return todo
        })
        return checkAllToDo(newToDos)
    }
    handleRemoveIsDone = () => {
        const {todos, removeAllDone} = this.props
        const newToDos = todos.filter(todo => !todo.isDone)
        return removeAllDone(newToDos)
    }
    countIsDone = () => {
        const {todos} = this.props
        return todos.reduce((pre, todo) => {return pre + (todo.isDone ? 1 : 0)}, 0)
    }
    countTotal = () => {
        const {todos} = this.props
        return todos.length
    }

    render(){
        return (
            <div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAllToDo} checked={this.countIsDone() === this.countTotal() && this.countTotal() !== 0 ? true : false}/>
				</label>
                <span>already done {this.countIsDone()} / total {this.countTotal()}</span>
				<button className="btn btn-danger" onClick={this.handleRemoveIsDone}>remove finished tasks</button>
			</div>
        )
    }
}