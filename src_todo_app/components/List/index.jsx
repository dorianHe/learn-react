import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component{
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired,
    }
    
    render(){
        const {todos, updateToDo, deleteToDo} = this.props
        return (
            <div>
                <ul>
                    {todos.map(todo=>{
                        return <Item key={todo.id} {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                    })}
                </ul>
            </div>
        )
    }
}