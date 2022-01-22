import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// class based component
// class Demo extends Component{
//     state = {value: 0}
//     myRef = React.createRef()

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({value:state.value + 1}))
//         }, 1000)
//     }

//     add = () => {
//         this.setState(state => ({value:state.value+1}))
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type='text' ref={this.myRef}></input>
//                 <h2>current value: {this.state.value}</h2>
//                 <button onClick={this.add}>add 1</button>
//                 <button onClick={this.unmount}>remove all components</button>
//                 <br></br>
//                 <br></br>
//                 <button onClick={this.show}>click show input</button>
//             </div>)
//     }
// }

// export default Demo

export default function Demo() {
    const [value, setValue] = React.useState(0)
    const [name, setName] = React.useState('Tom')
    const myRef = React.useRef()
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setValue(value => value+1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setValue(value+1)
    }

    function changeName() {
        setName('Tommy')
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type='text' ref={myRef}></input>
            <h2>current value: {value}</h2>
            <button onClick={add}>add 1</button>
            <h2>my name: {name}</h2>
            <button onClick={changeName}>change name</button>
            <button onClick={unmount}>remove all components</button>
            <br></br>
            <button onClick={show}>click me show input</button>
        </div>
    )
}