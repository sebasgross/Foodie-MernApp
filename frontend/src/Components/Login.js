import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Login extends Component{

state = {
    auth: {},
    message: ""
  };

  handleChange = e => {
    let { auth } = this.state;
    auth[e.target.name] = e.target.value;
    this.setState({ auth });
  };

  render() {
    let { auth } = this.state;
    return (
        <div className="login-container">

         <div className="main-card">
         <div className="login-card">
             <h1>Log in</h1>
             <input className="signup-input" onChange={this.handleChange} name="email" type="text" placeholder="email" />
             <input className="signup-input" onChange={this.handleChange} name="password" type="password" placeholder="password" /> 
             <p>Dont have an account? <Link to="/signup">Click Here</Link></p>   
        
         </div>

         <button onClick={() => this.props.logIn(auth)}>Log in</button>

         </div>
         </div>
    );
  }
}
export default Login