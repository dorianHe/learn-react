import React, {Component} from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {hasError:''}

    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }

    componentDidCatch() {
        // count how many times error occured and report to backend for debugging
        console.log('error encountered')
    }

    render() {
        return (
            <div>
                <h3>Parent</h3>
                {this.state.hasError ? <h4>Network busy, try later</h4> : <Child/>}
            </div>
        )
    }
}