import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




class Home extends React.Component{
    state={
        products:[],
        user:{}
    }

    componentDidMount(){
        let url = "http://localhost:3000/home"
        axios.get(url,{withCredentials:true})
        .then((res)=>{
            
            this.setState({products:res.data.product})

        })
        .catch((err)=>console.log(err))
    }
    render(){
        const {products,user} = this.state
        console.log(products)
        if(products.length === 0 || !user) return <div><img height="200"src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif" alt="pizza-loader" /></div>
        return(
            <div className="home">
            <h1>Today's Menu</h1>
                <div className="home-container"> 
                      {products.map((product)=>{
                return(

                    <div key={product._id} className="home-available" >
               <Link to={`detail/${product._id}`}>
               <div className="home-plate">    
                    <h2>Plate</h2>                
                    <h3>Chef: <b>{product.seller.username}</b></h3>
                    <img height="80"src={product.picture} alt=""/>
                    <p># <b>{product.type}</b></p>
                    <p>Exquisite <b>{product.cuisine}</b> cuisine</p>
                    <p>Are you interested? Click me for details</p>
                </div>
                </Link> 
                    </div>

                )
            })}
            </div>
            </div>
        )
    }
}
export default  Home