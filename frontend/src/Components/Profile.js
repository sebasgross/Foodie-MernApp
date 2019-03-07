import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
// const url = "http://localhost:3000/imageProfile" 
// const serviceUpload  = axios.create({url, withCredentials: true})


const profile = "profile/products"
const url2 = "http://localhost:3000/" + profile

class Profile extends Component {
  state = {
    user: {},
    product:[]
  };

  componentDidMount() {
     axios.get(url2,{withCredentials:true})
     .then(res=>{
       this.setState({product:res.data.product, user: res.data.user})
      //  this.forceUpdate()
        // this.render()

     })
     .catch(err=>{
       console.log(err)
       this.props.history.push('/login')
     }) 
  }
  componentWillReceiveProps(){
    axios.get(url2, {withCredentials: true})
    .then(res => {
        this.setState({user: res.data.user})
        this.forceUpdate()})
    .catch(e=> this.history.push("/login"))                                 
}


  // subeImagen = (file, url) => {
  //   const formData = new FormData()
  //   formData.append('picture', file)
  //   return serviceUpload.post(url, formData, {headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },})
  //     .then( (res) => res.data )
  //     .catch( e => console.log(e))
  //   }

  render() {
    const { user, product } = this.state;
   
    if (!user) return <div>Loading...</div>;
  
    console.log(product)
    return (
      <div>
        <h1>Profile</h1>
        <p>
          Username:
          {user.username}
          <br />
          Email:
          {user.email}
        </p>

        <p>{user.chef}</p>

        <div  className="profile-container">
          {product.map(product => {
            return(
              <div key={product._id} className="profile-card">
                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity}</p>
              </div>
            )}
            )}
              </div>
        <div>
          <Link to="/new/product"> Post your Product </Link>
        </div>
      </div>
    );
  }
}
export default Profile;