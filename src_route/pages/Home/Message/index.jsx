import React, {Component} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id:'01', title:'message 1'},
            {id:'02', title:'message 2'},
            {id:'03', title:'message 3'},
        ]
    }

    replaceShow = () => {
        console.log(this.props.history)
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return (
                                <li key={message.id}>
                                    {/* route with params */}
                                    <Link to={`/home/message/${message.id}`}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                <Outlet/>
            </div>
        )

    }
}