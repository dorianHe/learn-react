import React, {Component} from 'react'

export default class Child extends Component {
    // correct data stored in state
    state = {
        users:[
            {id:1, name:'tom', age:19},
            {id:2, name:'jerry', age:12},
            {id:3, name:'Mike', age:13},
            {id:4, name:'John', age:17},
        ]
    }
    // example wrong data
    state = 'users'
    
    render() {
        const {users} = this.state
        return (
            <div>
                <h3>Child</h3>
                <ul>
                    {users.map((user) => {return <li>{user.name} - {user.age}</li>})}
                </ul>
            </div>
        )
    }
}