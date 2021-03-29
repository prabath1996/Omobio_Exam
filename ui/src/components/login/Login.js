import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';

class Login extends Component {
    constructor(){
        super();
            this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.username && this.state.password){
            PostData('login',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
                else
                alert(result.error);
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'}/>)
        }
        if(sessionStorage.getItem('userData')){
            return (<Redirect to={'/home'}/>)
        }
        return (
            <div className="container">
           
            <div className="row" id="Body">
                {/* <div className="medium-5 columns"> */}
                <div className="col-md-6 mx-auto" id="login">
                    <h2 style = {{textAlign:"center"}}>Login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.onChange}/>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange}/>
                    <input type="submit" className="button" value="Login" onClick={this.login}/>
                </div>
            </div>
            
            </div>
        );
    }
}
export default Login;