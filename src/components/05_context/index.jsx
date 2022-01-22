import React, {Component} from 'react'
import './index.css'

const MyContext = React.createContext()
// const {Provider, Consumer} = MyContext
export default class A extends Component {
    state = {username:'tom', age:19}
    render() {
        const {username, age} = this.state
        return (
            <div className='parent'>
                <h3>I am Component A</h3>
                <h4>My username:  {username}</h4>
                <h4>My age:  {age}</h4>
                <MyContext.Provider value={{username:username, age:age}}>
                    <B username={username} age={age}/>
                </MyContext.Provider>
            </div>
        )
    }
}

// using props from A to B
class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>I am Component B</h3>
                <h4>username from A:  {this.props.username}</h4>
                <h4>age from A:  {this.props.age}</h4>
                <C/>
            </div>
        )
    }
}

// using context from A to C (class based  component)
// class C extends Component {
//     static contextType = MyContext
//     render() {
//         const {username, age} = this.context
//         return (
//             <div className='grandchild'>
//                 <h3>I am Component C</h3>
//                 <h4>username from A: {username}</h4>
//                 <h4>age from A:  {age}</h4>
//             </div>
//         )
//     }
// }

// using context from A to C (function based component)
function C() {
    return (
            <div className='grandchild'>
                <h3>I am Component C</h3>
                <h4>username from A:
                    <MyContext.Consumer>
                        { value => value.username }
                    </MyContext.Consumer>
                </h4>
                <h4>age from A:
                    <MyContext.Consumer>
                        { value => value.age }
                    </MyContext.Consumer>
                </h4>
            </div>
    )

}