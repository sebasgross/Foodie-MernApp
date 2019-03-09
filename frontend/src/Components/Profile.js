import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import MapBox from "./MapBox";
// const url = "http://localhost:3000/imageProfile" 
// const serviceUpload  = axios.create({url, withCredentials: true})


const profile = "profile"
const url2 = "http://localhost:3000/" + profile
const chefprofile = "profile/products"
const url3 = "http://localhost:3000/" + chefprofile


class Profile extends Component {
  state = {
    user: {},
    product:[],
    productsChef: [],
    productsFiltered:[]
  };

  componentDidMount() {
    
     axios.get(url2,{withCredentials:true})
     .then(res=>{
       this.setState({ user: res.data, product: res.data.products})
     })

     axios.get(url3,{withCredentials:true})
     .then(res=>{
       this.setState({productsChef: res.data.product})
     })
     .catch(err=>{
      console.log(err)
      this.props.history.push('/login')
    }) 
  }

  filterProducts = () => {
    
    const { productsChef } = this.state
    let filtered = productsChef.filter(item=>item.active === true)
    this.setState({productsFiltered: filtered})
    
  }


  render() {
    const { user, product,productsChef,productsFiltered } = this.state;

    if (!user) return <div><img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif" alt="pizza-loader" /></div>;
  
    if(user.chef){
      return(
        <div>
          
          <div>
            <h2><b>Chef Profile</b></h2>
          </div>
          <Link to="/map/direction">AQUI para mapa</Link>
          <h1>{user.username}</h1>
          <h4>{user.email}</h4>
          <div>
            <Link to="/new/product"> Post your Product </Link>
          </div>
          <hr></hr>
          <div  className="profile-container">
          {productsChef.map(product => {
            return(
              <div key={product._id} className="profile-card">
                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity}</p>
              </div>
            )}
            )}
            </div>

            <hr></hr>
            <button onClick={this.filterProducts}>Filter</button>

              <div className="profile-container">
            {productsFiltered.map(product=>{
              return(
                <div key={product._id} className="profile-card">
                
                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity}</p>
                <button>Arrived at clients house.</button>
                
                </div>
              )}
              )}
        </div>
        </div>
      )
    }
    return (
      <div className="user-container">
        <h1>Profile</h1>
        <p>
          Username:
          {user.username}
          <br />
          Email:
          {user.email}
        </p>

        <p>{user.product}</p>

        <div  className="profile-container">
          {product.map(product => {
            return(
              <div key={product._id} className="profile-card">
              {/* <p>{user.products}</p> */}

                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity}</p>
              </div>
            )}
            )}
              </div>

      </div>
    );
            }
          }

export default Profile;