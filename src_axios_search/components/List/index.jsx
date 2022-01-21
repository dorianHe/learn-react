import React, {Component} from 'react'
import './index.css'

export default class List extends Component {
    render(){
        const {users, isFirst, isLoading, err} = this.props.appState
        if (err.length !== 0){
            return (
                <div>
                    <span>{err.message}</span>
                </div>
            )
        }
        if (isLoading === true) {
            return (
                <div>
                    <span>Loading now ...</span>
                </div>
            )
        }
        if (isFirst === true) {
            return (
                <div>
                    <span>Welcome to use!</span>
                </div>
            )
        }
        if (users.length !== 0){
            return (
                <div className="row">
                    {
                        users.map(user => {
                            return (
                                <div key={user.id} className="card">
                                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                        <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            )
        }
    }
}
