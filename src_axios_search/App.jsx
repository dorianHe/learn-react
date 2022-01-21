import React, {Component} from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        users: [],
        isFirst: true, // first time visiting page
        isLoading: false, // waiting for backend response
        err: "", // error message
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List appState={this.state}/>
            </div>
        )
    }
}
