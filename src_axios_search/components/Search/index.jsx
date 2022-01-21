import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component {
    handleSearch = () => {
        const {keyWordElement:{value:keyword}} = this
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(`http://localhost:3000/search/users2?q=${keyword}`).then(
            response => {this.props.updateAppState({users:response.data.items, isLoading:false})},
            error => {this.props.updateAppState({isLoading:false, err:error})}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>
                        &nbsp;
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
            </section>
        )
    }
}