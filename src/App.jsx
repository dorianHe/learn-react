import React, {Component} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/Home/News'
import Message from './pages/Home/Message'
import Detail from './pages/Home/Message/Detail'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* nested routes */}
                                <Routes>
                                    <Route path="/home" element={<Home/>}>
                                        <Route path="news" element={<News/>}/>
                                        <Route path="message" element={<Message/>}>
                                            {/* routes + params */}
                                            <Route path=":detailId" element={<Detail/>}/>
                                        </Route>
                                    </Route>
                                    <Route path="/about" element={<About/>} />
                                    <Route path="*" element={<Navigate to="/about"/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
