import React,{Component} from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import * as toastr from 'toastr';


class Login extends Component{
//     state={
//         auth:{},
//         message:""
//     }    


//     eventHandler(e){
//         let { auth } = this.state;
//         auth[e.target.name] = e.target.value;
//         this.setState({ auth });
//     }

//     // function sendToServer(){
//     //     // console.log(auth)
//     //     let url = 'http://localhost:3000/login'
//     //     //por degfault axios ignora cokkies, hay q configurarlo para q pase cookies ({withCredentials})
//     //     axios.post(url,auth, { withCredentials:true })
//     //     .then(res=>{
//     //         // console.log(props.history)
//     //         props.history.push('/profile')
//     //     })
//     //     .catch((e)=>{
//     //         console.log(e)
//     //         toastr.error('Email or Password fields incorrect')
//     //     })
//     // }
//     render(){
//         let { message, auth } = this.state;
//     return(

//         <div className="login-container">

//         <div className="main-card">
//         <div className="login-card">
//             <h1>Log in</h1>
//             <input className="signup-input" onChange={this.eventHandler} name="email" type="text" placeholder="email" />
//             <input className="signup-input" onChange={this.eventHandler} name="password" type="password" placeholder="password" /> 
//             <p>Dont have an account? <Link to="/signup">Click Here</Link></p>   

//         </div>
//         <div className="hello-card">
//         <h2>Hello</h2>
//         <p>awesome to have you back!</p>
//         <button onClick={() => this.props.logIn(auth)}>Log in</button>
        
//         </div>
//         </div>
//         </div>
//     )
// }
// }
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
         <div className="hello-card">
         <h2>Hello</h2>
         <p>awesome to have you back!</p>
         <button onClick={() => this.props.logIn(auth)}>Log in</button>
                
         </div>
         </div>
         </div>
    );
  }
}
export default Login