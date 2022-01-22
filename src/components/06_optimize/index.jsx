import React, {Component, PureComponent} from 'react'
import './index.css'


export default class A extends Component {
    state = {username:'tom'}
    // or use PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.username === this.state.username) return false
        else return true
    }

    changeUsername = () => {
        // indeed change the state
        // this.setState({username:'jerry'})
        // no change on the state
        this.setState({})
    }
    render() {
        const {username} = this.state
        console.log('parent render is called')
        return (
            <div className='parent'>
                <h3>my username: {username}</h3>
                <button onClick={this.changeUsername}>change username</button>
                <B username={username}/>
            </div>
        )
    }
}

class B extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.username === this.props.username) return false
        else return true
    }

    render () {
        console.log('child render is called')
        return (
            <div className='child'>
                <h3>changed name: {this.props.username}</h3>
            </div>
        )
    }
}