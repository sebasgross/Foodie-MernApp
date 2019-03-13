import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'



const profile = "profile"
const url2 = "http://localhost:3000/" + profile
const chefprofile = "profile/products"
const url3 = "http://localhost:3000/" + chefprofile
// const borrar = "delete/product" 


class Profile extends Component {
  state = {
    user: {},
    product:[],
    productsRecipes:[],
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
      console.log(res)

       this.setState({productsChef: res.data.product})
       const { productsChef } = this.state
       let filtro = productsChef.filter(item=>item.bought === false)
       this.setState({productsRecipes: filtro})
     })
     .catch(err=>{
      console.log(err)
      this.props.history.push('/login')
    }) 

  }

  filterProducts = () => {
    
    const { productsChef } = this.state
    let filtered = productsChef.filter(item=>item.bought === true)
    this.setState({productsFiltered: filtered})
    
  }


  render() {
    const { user, product,productsRecipes,productsFiltered } = this.state;
    console.log(product)

    if (!user) return <div><img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif" alt="pizza-loader" /></div>;
    if(user.chef && user.coordinates.length === 0){
      return(
        <div className="add-address">
        <Link to="/map/direction">Add your address, before posting your food.</Link>
        </div>
      )
    }
    if(user.chef){
      return(
        <div className="profile-page">
          
          <div className="user-card">
          <h2><b>Chef Profile</b></h2>
          <h1>{user.username}</h1>
          <h4>{user.email}</h4>
          </div>

          <div>
            <Link to="/new/product"> Post your Product </Link>
          </div>
          <hr></hr>
          <h2>Your Recipes</h2>
          <div  className="profile-container">
          {productsRecipes.map(product => {
            return(
              <Link to={`edit/${product._id}`}>
              <div key={product._id} className="profile-card">
                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity} plates</p>
                <p> $ {product.price}</p>
                <p>Click to Edit</p>
                

              </div>
              </Link>
            )}
            )}
            </div>

            <hr></hr>
            <button onClick={this.filterProducts}>Current Orders</button>

              <div className="profile-container">
            {productsFiltered.map(product=>{
              return(
                <div key={product._id} className="profile-card2">
                
                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>{product.quantity}# order</p>
                <p>Address: {product.addressTo}</p>
                <Link to={`directions/${product._id}`}><button>Start trip</button></Link>
              

                </div>
              )}
              )}
        </div>
        </div>
      )
              }


  if(!user.chef){
    return (
      <div className="user-container">

        <h1>Profile</h1>
        <div>
        <p>
          Username:
          {user.username}
          <br />
          Email:
          {user.email}
        </p>
        <Link to="/home">
        <p>Hungry? Check todays specialties</p>
        </Link>
        </div>
       
        <h2>Current orders</h2>

        <div  className="profile-container">
    
          {product.map(product => {
            return(
              <Link to={`track/${product._id}`}>
              <div key={product._id} className="profile-card">
              {/* <p>{user.products}</p> */}

                <h2>{product.name}</h2>
                <img height="100"src={product.picture} alt="" />
                <p>order : {product.quantity}</p>
                <span>Click me to track order</span>

              </div>
              </Link>

            )}
            )}
              </div>

      </div>
    );
  }
    //ELSE

            }
            
          }

export default Profile;