import React, {Component} from "react"
import { Outlet } from "react-router"
import MyNavLink from "../../components/MyNavLink"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home Content</h2>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                </ul>
                {/* placeholder */}
                <Outlet/>
            </div>
        )
    }
}