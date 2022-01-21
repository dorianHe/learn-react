import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import './index.css'

export default class Header extends Component{
    static propTypes = {
        addToDo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        const {keyCode,target} = event
        if (keyCode !== 13) return
        if (target.value.trim() === ''){
            alert('invalid input')
            return
        }
        const taskObj = {
            id: nanoid(),
            name:target.value,
            isDone:false
        }
        this.props.addToDo(taskObj)
        target.value = ''
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type='text' placeholder='input your task here'/>
            </div>
        )
    }
}
