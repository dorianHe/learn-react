import React, {Component} from 'react'
import './index.css'

export default class Parent extends Component {
    render () {
        return (
            <div className='parent'> 
                <h3>Parent component</h3>
                {/* (1) one way of making B as A's child */}
            {/*             
                <A>
                    <B/>
                </A> 
            */}
                {/* (2) another way of making B as A's child and passing states to it */}
                <A render = {(username) => <B username={username}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state = {username:'tom'}
    render () {
        const {username} = this.state
        return (
            <div className='child'> 
                <h3>A</h3>
                {/* (1) B is sent to A from Parent as props.children  */}
                {/* {this.props.children} */}
                {/* (2) passing username from state to B by render, namely renderProps */}
                {this.props.render(username)}
            </div>
        )
    }
}

class B extends Component {
    render () {
        return (
            <div className='grandchild'> 
                <h3>B</h3>
                {/* (2) show username from A */}
                <h4>name from A: {this.props.username}</h4>
            </div>
        )
    }
}