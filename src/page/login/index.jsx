
import React        from 'react';
import './index.scss';
import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'

const _mm   = new MUtil();
const _user = new User();

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    onInputChange(e){
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    onSubmit(){
        let loginInfo = {
            username : this.state.username,
            password : this.state.password
        }
        _user.login(loginInfo).then(data => {
            _mm.setStorage('userInfo', data)
            this.props.history.push(this.state.redirect)
        }).catch(err => {
            console.log(err);
        })
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit()
        }
    }

    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default login-panel">
                <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                <div className="panel-body">
                    <div>
                        <div className="form-group">
                            <input type="text"
                                name="username"
                                className="form-control"
                                placeholder="请输入用户名"
                                onChange={e => this.onInputChange(e)} 
                                onKeyUp={e => this.onInputKeyUp(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                name="password"
                                className="form-control" 
                                placeholder="请输入密码" 
                                onChange={e => this.onInputChange(e)} 
                                onKeyUp={e => this.onInputKeyUp(e)}/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block"
                            onClick={_ => this.onSubmit()}>登录</button>
                    </div>
                </div>
            </div>
        </div>
         
        )        
    }
}

export default Login