
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MUtil  from 'util/mm.jsx'
import User from 'service/user-service.jsx'

const _mm = new MUtil()
const _user = new User()

class NavTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }
    render(){
        return (
            <nav className="navbar navbar-default top-navbar" >
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            }
                            
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={_ => this.onLogout()}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>            
            </nav>
        )
    }

    onLogout() {
        _user.logout().then(result => {
            _mm.removeStorage('userInfo')
            window.location.href='/login'
        }, err => {
            _mm.errorTips(err)
        })
        
    }
}

export default NavTop