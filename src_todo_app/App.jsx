import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css'

export default class App extends Component{
    // initial tasks for testing
    state = {
        todos:[
            {id: '001', name:'eat', isDone:true},
            {id: '002', name:'sleep', isDone:true},
            {id: '003', name:'code', isDone:false}
        ]
    }
    // add a new todo 
    addToDo = (toDoObj) => {
        const {todos} = this.state
        const newToDos = [toDoObj, ...todos]
        this.setState({todos:newToDos})
    }
    // change state when it is checked
    updateToDo = (id, isDone) => {
        const {todos} = this.state
        const newToDos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, isDone}
            }
            else{
                return todo
            }
        })
        this.setState({todos:newToDos})
    }
    // delete todo
    deleteToDo = (id) => {
        const {todos} = this.state
        const newToDos = todos.filter(todo => todo.id !== id)
        this.setState({todos: newToDos})
    }
    // check all todos
    checkAllToDo = (newToDos) => {
        this.setState({todos: newToDos})
    }

    // remove all done todos
    removeAllDone = (newToDos) => {
        this.setState({todos: newToDos})
    }

    render(){
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo={this.addToDo}/>
                    <List todos={todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo}/>
                    <Footer todos={todos} checkAllToDo={this.checkAllToDo} removeAllDone={this.removeAllDone}/>
                </div>
            </div>
        )
    }
}
