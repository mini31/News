import React from 'react';
import {browserHistory} from 'react-router';
export default class Login extends React.Component{
constructor(){
    super();
  this.state={
    "username":"default",
    "password":"default"
  }
}
user(euser){
this.setState({"username":euser.target.value});
console.log(this.state.username);
}
pass(epass){
this.setState({password:epass.target.value});
}
check(){
  console.log("check login");
var login={
  "username":this.refs.user.value,
  "password":this.refs.pass.value
}
  console.log("login clicked");
  console.log(login);
  $.ajax({
    url:"/users/Login",
    type: 'POST',
    data : login,
    success: function(data)
    {
      console.log("inside success");
      alert("Successfully logged in");
      browserHistory.push('/home');

    },
    error: function(err)
    {
      console.log(err);
      alert("Incorrect username and password");
      browserHistory.push('/Login');
      /*{this.refs.user.value=" "}*/;
    }
  });
}

render(){
return (
    <div className="login-card">
       <div>
       <h1>Log-in</h1><br />
       </div>


      <input type="text" name="user" placeholder="Username" ref="user"/><br/>
      <input type="password" name="pass" placeholder="Password" ref="pass"/><br/>
      <input type="submit" name="Login" className="login login-submit" value="Login" onClick={this.check.bind(this)} />


  </div>

   )
   }
}
